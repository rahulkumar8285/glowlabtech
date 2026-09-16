# ==========================================
# Multi-stage Dockerfile for GrowthTechSys SPA
# Stage 1: Build static assets using Node.js
# Stage 2: Serve optimized assets with Nginx
# ==========================================

# STAGE 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (leverage Docker layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build production assets (outputs to /app/dist)
RUN npm run build

# STAGE 2: Production Nginx serve stage
FROM nginx:1.27-alpine AS runner

# Remove default nginx website configuration
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Health check to ensure Nginx is serving traffic
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:80/ || exit 1

# Launch Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
