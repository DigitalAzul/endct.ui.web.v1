FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install y
RUN npm run build


EXPOSE 65310

CMD ["npm", "run", "start"]

