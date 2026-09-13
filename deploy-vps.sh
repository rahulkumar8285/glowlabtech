#!/usr/bin/env bash
set -euo pipefail

echo "================================================"
echo "  🚀 GlowLab Tech — Production VPS Deployment   "
echo "================================================"

# 1. Update packages and install prerequisites
echo "📦 Updating system packages..."
apt-get update -y
apt-get install -y curl git ufw

# 2. Stop host web servers that might conflict on port 80
if systemctl is-active --quiet apache2 2>/dev/null; then
    echo "🛑 Disabling host apache2 to free port 80..."
    systemctl stop apache2 || true
    systemctl disable apache2 || true
fi
if systemctl is-active --quiet nginx 2>/dev/null; then
    echo "🛑 Disabling host nginx to free port 80..."
    systemctl stop nginx || true
    systemctl disable nginx || true
fi

# 3. Install Docker if not installed
if ! command -v docker &> /dev/null; then
    echo "🐳 Installing Docker Engine..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl enable --now docker
    rm -f get-docker.sh
else
    echo "✅ Docker is already installed: $(docker --version)"
fi

# Ensure Docker Compose plugin is present
if ! docker compose version &> /dev/null; then
    echo "🐳 Installing Docker Compose plugin..."
    apt-get install -y docker-compose-plugin
fi

# 4. Configure firewall rules
echo "🛡️ Configuring firewall rules..."
ufw allow OpenSSH || true
ufw allow 80/tcp || true
ufw allow 443/tcp || true

# 5. Clone or pull latest repository
DEPLOY_DIR="/opt/glowlabtech"
echo "📂 Deploying to ${DEPLOY_DIR}..."

if [ -d "${DEPLOY_DIR}/.git" ]; then
    echo "🔄 Pulling latest changes from origin/main..."
    cd "${DEPLOY_DIR}"
    git fetch origin
    git reset --hard origin/main
else
    echo "📥 Cloning repository..."
    mkdir -p "${DEPLOY_DIR}"
    git clone https://github.com/rahulkumar8285/glowlabtech.git "${DEPLOY_DIR}"
    cd "${DEPLOY_DIR}"
fi

# 6. Build and launch Docker container
echo "🏗️ Building and starting Docker container stack on port 80..."
export PORT=80
docker compose down || true
docker compose up -d --build

# 7. Verify container status and logs
echo "⏳ Verifying container status..."
sleep 4
STATUS=$(docker inspect --format='{{.State.Status}}' glowlab-tech-web 2>/dev/null || echo "unknown")

if [ "$STATUS" != "running" ]; then
    echo "❌ Container failed to start (Status: $STATUS). Printing container logs:"
    docker logs --tail 50 glowlab-tech-web
    exit 1
fi

docker ps --filter "name=glowlab-tech-web"

SERVER_IP=$(curl -4 -s ifconfig.me 2>/dev/null || echo "216.219.95.111")
echo "================================================"
echo "  🎉 Deployment Complete!                       "
echo "  Site is live at: http://${SERVER_IP}"
echo "================================================"
