#!/usr/bin/env sh
set -eu

envsubst '${SSL_CERT_PATH} ${SSL_KEY_PATH}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"