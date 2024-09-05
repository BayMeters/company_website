# Stage 1: Build the React app
FROM node:18.17.1 AS build
WORKDIR /app

# Install latest npm version
RUN npm install -g npm@latest

# Copy package files
COPY package.json package-lock.json ./

# Configure npm for better network resilience
RUN npm config set registry https://registry.npmjs.org/ \
    && npm config set fetch-retries 5 \
    && npm config set fetch-retry-factor 5 \
    && npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm config set timeout 60000

# Install dependencies
RUN npm ci --prefer-offline --no-audit

# Copy the rest of the application code
COPY . ./

# Build the application
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]