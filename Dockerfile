# ==========================================
# Multi-stage Dockerfile for GrowthTechSys
# Stage 1: Build static assets using Node.js
# Stage 2: Serve SPA and Nodemailer API via Node.js
# ==========================================

# STAGE 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build production assets (outputs to /app/dist)
RUN npm run build

# STAGE 2: Production Node.js runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=80

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist ./dist

# Copy server code
COPY server.js ./server.js
COPY server ./server

# Expose HTTP port
EXPOSE 80

# Health check to ensure server and API are healthy
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:80/api/health || exit 1

# Launch production server
CMD ["node", "server.js"]
