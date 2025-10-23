FROM nginx:alpine

# Kopier app-filer
COPY app/ /usr/share/nginx/html/

# Kopier nginx config
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Exponer port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
