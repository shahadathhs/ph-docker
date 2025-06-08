COMPOSE=docker-compose
PROJECT_NAME=ph-docker

# Environment file paths
ENV_FILE_BACKEND=docker-with-typescript-backend/.env
ENV_FILE_FRONTEND=docker-with-nextjs-frontend/.env.local
DOCKER_COMPOSE_FILE=docker-compose.yml

# Docker Compose commands
up:
	@echo "🚀 Starting all containers..."
	$(COMPOSE) -p $(PROJECT_NAME) up -d -f

down:
	@echo "🛑 Stopping and removing all containers..."
	$(COMPOSE) -p $(PROJECT_NAME) down -f

restart: down up

logs:
	@echo "📜 Showing logs (follow mode)..."
	$(COMPOSE) -p $(PROJECT_NAME) logs -f

logs-backend:
	$(COMPOSE) -p $(PROJECT_NAME) logs -f backend

logs-frontend:
	$(COMPOSE) -p $(PROJECT_NAME) logs -f frontend

logs-db:
	$(COMPOSE) -p $(PROJECT_NAME) logs -f mongodb

ps:
	@echo "📦 Container status:"
	$(COMPOSE) -p $(PROJECT_NAME) ps

build:
	@echo "🔨 Building images (if Docker files are present locally)..."
	$(COMPOSE) -p $(PROJECT_NAME) build

prune:
	@echo "🧹 Pruning dangling containers and volumes..."
	docker system prune -f
	docker volume prune -f

rebuild: down build up

