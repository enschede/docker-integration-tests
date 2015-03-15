#!/bin/sh

(echo "upstream app1backend { server ${NGINX_APP1HOST:-app1alias:8080}; }" && cat /etc/nginx/conf.d/default.conf) > default.conf.new
mv default.conf.new /etc/nginx/conf.d/default.conf

exec "$@"
