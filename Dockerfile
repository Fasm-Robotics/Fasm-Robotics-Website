# Stage 1: Build the app
FROM node:20 as build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code and build the app
COPY . .
RUN npm run build

# Stage 2: Preprod Deployment
FROM nginx:stable-alpine as preprod

# Copy the prebuilt app
COPY --from=build /app/build /usr/share/nginx/html

# Copy preprod-specific Nginx config
COPY nginx.preprod.conf /etc/nginx/nginx.conf

# Stage 3: Prod Deployment
FROM nginx:stable-alpine as prod

# Copy the prebuilt app
COPY --from=build /app/build /usr/share/nginx/html

# Copy prod-specific Nginx config
COPY nginx.prod.conf /etc/nginx/nginx.conf

# Expose port for Nginx
EXPOSE 80
EXPOSE 8080

# Nginx will serve the content
CMD ["nginx", "-g", "daemon off;"]
