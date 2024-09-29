# Stage 1: Build the React app
FROM node:18.17.1 AS frontend-build

# Install Git and Git LFS
RUN apt-get update && \
    apt-get install -y git curl && \
    curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash && \
    apt-get install -y git-lfs && \
    git lfs install

WORKDIR /app/frontend

# Clone the repository to ensure Git LFS files are pulled
# Replace <REPO_URL> with your actual repository URL
# If your repository is private, ensure you handle authentication securely
RUN git clone https://github.com/BayMeters/company_website.git . && \
    git lfs pull && \
    ls -la /app/frontend

# Install dependencies
RUN cd frontend && \
    ls -la /app/frontend && \
    yarn install --frozen-lockfile --network-timeout 300000

# Build the frontend
RUN yarn build

# Stage 2: Set up the backend
FROM node:18.17.1 AS backend
WORKDIR /app/backend
COPY backend/package.json backend/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 300000
COPY backend .

# Stage 3: Final image
FROM nginx:alpine
# Copy frontend build
COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html
# Copy backend
COPY --from=backend /app/backend /app/backend
# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
# Install Node.js in the final image
RUN apk add --update nodejs npm
# Expose port 80
EXPOSE 80
# Start Nginx and Node.js backend
CMD ["sh", "-c", "nginx && cd /app/backend && node server.js"]