# Dockerfile for Frontend

# المرحلة الأولى: البناء
FROM node:22.5.1 AS frontend-builder

WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install -g @angular/cli@latest
RUN npm install
COPY ./frontend .
RUN ng build --output-path=dist/browser

# المرحلة الثانية: التقديم باستخدام Nginx
FROM nginx:alpine

# إزالة محتويات /usr/share/nginx/html لتجنب تعارض الملفات
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

# نسخ ملفات البناء مباشرة إلى مجلد Nginx
COPY --from=frontend-builder /app/dist/browser/* /usr/share/nginx/html/

# نسخ الشهادات إلى مجلد Nginx
COPY ./certs /etc/nginx/certs/

# نسخ إعدادات Nginx المخصصة
COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
