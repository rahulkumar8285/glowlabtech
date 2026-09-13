#!/usr/bin/env bash
set -euo pipefail

echo "================================================"
echo "  🚀 GlowLab Tech — Production VPS Deployment   "
echo "================================================"

# 1. Update packages and install prerequisites
echo "📦 Updating system packages..."
apt-get update -y
apt-get install -y curl git ufw

# 2. Install Docker if not installed
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

# 3. Configure firewall
echo "🛡️ Configuring firewall rules..."
ufw allow OpenSSH || true
ufw allow 80/tcp || true
ufw allow 443/tcp || true

# 4. Clone or pull latest repository
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

# 5. Build and launch Docker container
echo "🏗️ Building and starting Docker container stack on port 80..."
export PORT=80
docker compose down || true
docker compose up -d --build

# 6. Verify container status
echo "⏳ Verifying container health..."
sleep 5
docker ps --filter "name=glowlab-tech-web"

SERVER_IP=$(curl -s ifconfig.me || echo "216.219.95.111")
echo "================================================"
echo "  🎉 Deployment Complete!                       "
echo "  Site is live at: http://${SERVER_IP}"
echo "================================================"
