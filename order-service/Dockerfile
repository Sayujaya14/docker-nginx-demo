FROM node:20-alpine

WORKDIR /app

COPY app.js .

RUN npm init -y
RUN npm install express

EXPOSE 3003

CMD ["node", "app.js"]