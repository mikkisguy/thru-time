FROM nginx:alpine

COPY dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx-default.conf.template /etc/nginx/conf.d/default.conf.template

COPY nginx/docker-entrypoint.sh /
RUN ls -l
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

RUN cat /etc/nginx/conf.d/default.conf

EXPOSE ${REACT_PORT}
