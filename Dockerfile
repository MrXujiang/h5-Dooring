# syntax=docker/dockerfile:1.6
#
# Multi-stage Dockerfile for h5-Dooring.
#
# Build stage compiles the umi-based SPA with the legacy OpenSSL provider
# required by webpack 4 (see the `start`/`build` scripts in package.json).
# The runtime stage copies the static `dist/` output into a tiny nginx
# image so the result is portable and easy to self-host.
#
# Usage:
#   docker build -t h5-dooring:latest .
#   docker run --rm -p 8080:80 h5-dooring:latest
#
# Then open http://localhost:8080/ in a browser.

# ---------- Build stage ----------
FROM node:16-bullseye AS builder

ENV NODE_OPTIONS=--openssl-legacy-provider \
    CI=true \
    NPM_CONFIG_LOGLEVEL=warn \
    YARN_VERSION=1.22.19

# Install yarn pinned to the version most likely to match the existing
# yarn.lock (this project ships a yarn.lock; falling back to npm would
# produce a different dependency graph and break reproducible builds).
RUN corepack enable && corepack prepare yarn@${YARN_VERSION} --activate

WORKDIR /app

# Copy manifests first so the dependency layer is cached when only sources
# change.  This is the standard Docker "cache friendly" ordering.
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies required by umi to
# compile the source).  --frozen-lockfile guarantees we honour yarn.lock
# exactly, matching what every other contributor's local install does.
RUN yarn install --frozen-lockfile --network-timeout 600000

# Now copy the rest of the source tree and produce a production build.
COPY . .

# Build the static SPA.  The umi build outputs to ./dist (see .umirc.ts).
RUN yarn build

# ---------- Runtime stage ----------
FROM nginx:1.25-alpine AS runtime

# Replace the default nginx site with one that knows how to serve an
# umi SPA (history-mode fallback to index.html, gzip, cache headers).
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets from the builder stage.
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the default HTTP port.  Override at run-time with `-p`.
EXPOSE 80

# nginx:alpine already defines a correct CMD, but be explicit so that
# users reading the Dockerfile see exactly what runs.
CMD ["nginx", "-g", "daemon off;"]
