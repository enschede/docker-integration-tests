FROM nginx:1.7
COPY dist /usr/share/nginx/html
COPY nginx.conf/default.conf /etc/nginx/conf.d/

ADD bin/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
