# Dockerfile for Backend

# Use the appropriate Node.js version
FROM node:22.5.1 AS backend-builder

WORKDIR /app

# Only copy package.json and package-lock.json to install dependencies
COPY ./backend/package*.json ./

# Install dependencies
RUN npm install

# Rebuild bcrypt for compatibility with Docker (Linux)
RUN npm rebuild bcrypt --build-from-source

# Now copy the rest of the backend files
COPY ./backend .

EXPOSE 3000
CMD ["node", "server.js"]
