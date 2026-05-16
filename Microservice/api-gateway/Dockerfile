FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# The fix: added --legacy-peer-deps to bypass version conflicts
RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "dev"]