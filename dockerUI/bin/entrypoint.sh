#!/bin/sh

# Gebruik environment variablen om de configuratie van NGINX aan te passen
sed -i "s/#APP1HOST#/"${NGINX_APP1HOST:-app1alias:8080}"/g" /etc/nginx/conf.d/default.conf

# HOST wordt bepaald door Mesos
sed -i "s/#PROXYHOST#/"${HOST:-\$host}"/g" /etc/nginx/conf.d/default.conf

exec "$@"
