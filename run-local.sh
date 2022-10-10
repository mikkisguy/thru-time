#!/bin/bash
docker build -t thru-time-api ./backend/
docker build -t thru-time-frontend ./frontend/

docker-compose -p thru-time up -d
