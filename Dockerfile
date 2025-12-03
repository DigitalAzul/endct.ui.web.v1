FROM node:22-alpine

WORKDIR /app

#VOLUME certificados

COPY . .

RUN npm install y --legacy-peer-deps
RUN npm run build

EXPOSE 65311

CMD ["npm", "run", "start"]

