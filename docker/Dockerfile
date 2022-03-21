FROM node:alpine AS base  

WORKDIR /maze  
COPY package.json .
RUN yarn
COPY .babelrc.js .
COPY maps/ ./maps 
COPY src/ . 
ENTRYPOINT time yarn start ./maps/rect_01.map