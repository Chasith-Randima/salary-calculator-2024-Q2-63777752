FROM node:20-alpine

WORKDIR /app/frontend

# COPY ./frontend/package*.json ./
COPY package*.json ./

RUN npm install

# COPY ./frontend .
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]