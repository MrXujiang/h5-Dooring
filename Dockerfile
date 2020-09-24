FROM nginx:1.15-alpine
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
WORKDIR /usr/share/nginx/html
