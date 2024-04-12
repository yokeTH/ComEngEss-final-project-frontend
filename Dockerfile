FROM node:lts-alpine
COPY . ./app
COPY .env.docker.local ./app/.env.development.local
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]