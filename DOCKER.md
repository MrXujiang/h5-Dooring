# Running h5-Dooring with Docker / docker compose

This document explains how to build and run the project end-to-end
without installing Node.js, yarn or any other build dependency on
your host machine.  It is a drop-in solution for self-hosting and
closes the long-standing "I just want a working image" gap that
several users have asked about (see upstream issue #162).

The setup is a two-stage Docker build:

1. A `builder` stage compiles the umi-based React SPA into static
   files in `dist/`.
2. A `runtime` stage copies those files into an `nginx:alpine`
   image that serves them on port 80.

A hardened `default.conf` is also provided so that HTML5 history
routing (`/editor`, `/preview`, `/ide`, …) Just Works without
returning nginx 404s when the user refreshes the page.

## Quick start (docker compose, recommended)

```sh
# from the repository root
docker compose up --build
```

Once the build finishes, open
[http://localhost:8080/](http://localhost:8080/) in a browser.  To
stop and remove the container, press `Ctrl+C` or run:

```sh
docker compose down
```

If port `8080` is already in use, edit the `ports:` mapping at the
top of `docker-compose.yml` and change `"8080:80"` to, say,
`"9000:80"`.

## Quick start (plain `docker`)

```sh
docker build -t h5-dooring:latest .
docker run --rm -p 8080:80 --name h5-dooring h5-dooring:latest
```

Stop it with `docker stop h5-dooring` and remove the container with
`docker rm h5-dooring`.

## Behind a reverse proxy (Nginx Proxy Manager, Traefik, Caddy, …)

The container listens on port 80 inside its own network namespace,
which is exactly what reverse proxies expect.  Point your proxy at
`http://h5-dooring:80` (docker compose network) or
`http://127.0.0.1:8080` (host) and you are done.  No additional
headers need to be set — the SPA does not rely on any proxy
metadata.

## Why is the OpenSSL legacy provider set in the Dockerfile?

The `start` and `build` scripts in `package.json` set
`NODE_OPTIONS=--openssl-legacy-provider`.  This is a well-known
workaround for webpack 4 on Node 17+, where the default OpenSSL
provider can no longer load the legacy hashes the bundler still
uses.  We bake the same flag into the build stage so the in-image
build behaves identically to a local `yarn start`.

## Customising the build

* **Different Node version** — edit the `FROM node:16-bullseye AS
  builder` line in `Dockerfile`.  Node 14 and 16 are both known to
  work; later versions may need the OpenSSL workaround more often.
* **Different nginx base** — replace `nginx:1.25-alpine` with any
  other nginx image that understands `conf.d/*.conf`.  The bundled
  `default.conf` is plain nginx syntax.
* **Custom nginx config** — edit `default.conf`; it is copied into
  `/etc/nginx/conf.d/default.conf` at image build time.

## Troubleshooting

* **`/editor` returns 404** — make sure you did not delete
  `default.conf`.  SPA history routing depends on the
  `try_files $uri $uri/ /index.html;` directive.
* **Out of disk space** — the `dist/` folder is created inside the
  build stage and is not kept on the host, so a failed `docker
  compose down --rmi all` will not leak large files.  Use `docker
  system prune` periodically.
* **Port already in use** — change the host-side port in
  `docker-compose.yml` as described above.

## Files added by this change

| File                  | Purpose                                          |
| --------------------- | ------------------------------------------------ |
| `Dockerfile`          | Multi-stage build (deps → build → nginx).        |
| `default.conf`        | nginx config with SPA history fallback + gzip.   |
| `.dockerignore`       | Trims the build context for speed and safety.    |
| `docker-compose.yml`  | One-command self-hosting setup.                  |
| `DOCKER.md`           | This document.                                   |
