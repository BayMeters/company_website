# Stage 1: Build the React app
FROM node:18.17.1 AS build
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Configure Yarn for better network resilience
RUN yarn config set network-timeout 300000 \
    && yarn config set retry-times 5 \
    && yarn config set prefer-offline true

# Install dependencies
RUN yarn install --frozen-lockfile --network-timeout 300000

# Copy the rest of the application code
COPY . ./

# Build the application
RUN yarn build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]