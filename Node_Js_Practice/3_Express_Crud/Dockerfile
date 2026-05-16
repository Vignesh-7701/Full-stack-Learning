# 1. The Foundation
FROM node:20-alpine

# 2. The Workspace
WORKDIR /app

# 3. The Dependency Check
COPY package.json package-lock.json ./

# 4. The Installation
RUN npm install

# 5. The Application Code
COPY . .

# 6. The Network Port
EXPOSE 3000

# 7. The Execution Command
CMD ["node", "app.js"]