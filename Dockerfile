# Stage 1: Preprod Setup
FROM node:20 AS preprod

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code
COPY . .

# Expose port for preprod
EXPOSE 8080

# Start the application in preprod mode
CMD ["npm", "start"]

# Stage 2: Prod Setup
FROM node:20 AS prod

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code
COPY . .

# Expose port for prod
EXPOSE 80

# Start the application in prod mode
CMD ["npm", "start"]
