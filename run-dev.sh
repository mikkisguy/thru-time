#!/bin/bash
docker compose down

docker compose -f docker-compose.dev.yml up -d

github .

code ./frontend

cd ./backend
code .
yarn dev
