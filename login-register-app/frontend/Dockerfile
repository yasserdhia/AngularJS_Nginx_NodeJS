# Dockerfile for Frontend

# المرحلة الأولى: البناء
FROM node:22.5.1 AS frontend-builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./frontend/package*.json ./

# Install Angular CLI globally and the project dependencies
RUN npm install -g @angular/cli@latest
RUN npm install

# Copy the rest of the frontend files
COPY ./frontend .

# Build the Angular project
RUN ng build --output-path=dist  # تحديد المسار الصحيح للبناء

# المرحلة الثانية: التقديم باستخدام Nginx
FROM nginx:alpine

# Set working directory in Nginx container
WORKDIR /usr/share/nginx/html

# نسخ ملفات البناء من المرحلة السابقة إلى Nginx
COPY --from=frontend-builder /app/dist/browser /usr/share/nginx/html

# نسخ ملف تكوين Nginx المخصص
COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
