FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Copy the .env file
COPY .env .env

# Compile TypeScript to JavaScript
RUN npm run build

RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "start"]