FROM node:16-alpine
WORKDIR /app
COPY package*.json /app/
RUN ["npm", "install"]
COPY . /app/
EXPOSE 5000
ENTRYPOINT ["npm", "run", "start:dev"]