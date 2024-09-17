# Dockerfile for Backend

# Use the appropriate Node.js version
FROM node:22.5.1 AS backend-builder

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies first
COPY ./backend/package*.json ./

# Install dependencies
RUN npm install

# Rebuild bcrypt for compatibility with Docker (Linux)
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the backend files
COPY ./backend .

# Expose port 3000
EXPOSE 3000

# Install nodemon globally for automatic restarts
RUN npm install -g nodemon

# Start the application using nodemon to monitor file changes
CMD ["nodemon", "server.js"]
