# Stage 1: Build the React app
FROM node:18.17.1 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 300000
COPY frontend .
RUN yarn build

# Stage 2: Set up the backend
FROM node:18.17.1 AS backend
WORKDIR /app/backend
COPY backend/package.json backend/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 300000
COPY backend .

# Stage 3: Final image
FROM nginx:alpine
# Copy frontend build to Nginx
COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

# Copy backend code to final image
COPY --from=backend /app/backend /app/backend

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Install Node.js in the final image for the backend
RUN apk add --update nodejs npm

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx and Node.js backend
CMD ["sh", "-c", "nginx && cd /app/backend && node server.js"]