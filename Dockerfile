FROM nginx:1.15-alpine
COPY dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
