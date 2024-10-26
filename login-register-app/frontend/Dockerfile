# Dockerfile for Frontend

# المرحلة الأولى: البناء
FROM node:22.5.1 AS frontend-builder

WORKDIR /app

# نسخ ملفات package.json و package-lock.json فقط
COPY ./frontend/package*.json ./

# تثبيت Angular CLI والحزم
RUN npm install -g @angular/cli@latest
RUN npm install --legacy-peer-deps

# نسخ بقية ملفات المشروع، بما في ذلك مجلد assets
COPY ./frontend .

# بناء المشروع باستخدام Angular CLI
RUN ng build --output-path=dist/browser

# المرحلة الثانية: التقديم باستخدام Nginx
FROM nginx:alpine

# إزالة محتويات /usr/share/nginx/html لتجنب تعارض الملفات
RUN rm -rf /usr/share/nginx/html/*

# تحديد مجلد العمل
WORKDIR /usr/share/nginx/html

# نسخ ملفات البناء إلى مجلد Nginx
COPY --from=frontend-builder /app/dist/browser/* /usr/share/nginx/html/

# نسخ الشهادات إلى مجلد Nginx
COPY ./certs /etc/nginx/certs/

# نسخ إعدادات Nginx المخصصة
COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

# فتح منفذ 443 لتأمين الوصول
EXPOSE 443

# بدء خادم Nginx
CMD ["nginx", "-g", "daemon off;"]
