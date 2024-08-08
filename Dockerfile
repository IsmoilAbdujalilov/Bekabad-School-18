# Bosqich 1: Loyiha bog'liqliklarini o'rnatish va ishlab chiqish
FROM node:16 AS build

# Ishchi katalog yaratish
WORKDIR /app

# package.json va package-lock.json fayllarini konteynerga ko'chirish
COPY package*.json ./

# Bog'liqliklarni o'rnatish
RUN npm install

# Loyiha fayllarini ko'chirish va ishlab chiqish
COPY . .

# Loyihani ishlab chiqish
RUN npm run build

# Bosqich 2: Ishlab chiqilgan loyihani nginx serverga joylashtirish
FROM nginx:alpine

# Nginx konfiguratsiyasini sozlash (agar kerak bo'lsa)
COPY nginx.conf /etc/nginx/nginx.conf

# Ishlab chiqilgan fayllarni nginx statik fayllar joylashgan papkaga ko'chirish
COPY --from=build /app/build /usr/share/nginx/html

# Nginx serverni ishga tushirish
CMD ["nginx", "-g", "daemon off;"]