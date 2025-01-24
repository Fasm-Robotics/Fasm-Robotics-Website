# Stage 1: Build the app
FROM node:20 as buildpreprod

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code and build the app
COPY . .
RUN npm run build:preprod

FROM node:20 as buildprod

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code and build the app
COPY . .
RUN npm run build:prod

# Stage 2: Preprod Deployment
FROM nginx:stable-alpine as preprod

# Copy the prebuilt app
COPY --from=buildpreprod /app/build /usr/share/nginx/html

# Stage 3: Prod Deployment
FROM nginx:stable-alpine as prod

# Copy the prebuiltclapp
COPY --from=buildprod /app/build /usr/share/nginx/html

# Expose port for Nginx
EXPOSE 80
EXPOSE 8080

# Nginx will serve the content
CMD ["nginx", "-g", "daemon off;"]
