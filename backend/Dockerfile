FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Build TypeScript and run compiled output to avoid ts-node ESM loader issues
CMD ["sh", "-c", "npm run build && npm run start"]
