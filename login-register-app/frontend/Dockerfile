# Dockerfile for Frontend

# المرحلة الأولى: البناء
FROM node:22.5.1 AS frontend-builder

WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install -g @angular/cli@latest
RUN npm install
COPY ./frontend .
RUN ng build --configuration production

# المرحلة الثانية: التقديم باستخدام Nginx
FROM nginx:alpine

# نسخ ملفات البناء من المرحلة السابقة
COPY --from=frontend-builder /app/dist/login-register-app/browser /usr/share/nginx/html

# نسخ ملف تكوين Nginx المخصص
COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
