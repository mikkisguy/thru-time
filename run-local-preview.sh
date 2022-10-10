#!/bin/bash
docker build -t thru-time-api-preview ./backend/
docker build -t thru-time-frontend-preview ./frontend/

docker-compose -f docker-compose.preview.yml -p thru-time-preview up -d
