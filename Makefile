COMPOSE=docker compose
PROJECT_NAME=ph-docker
DOCKER_COMPOSE_FILE=docker-compose.yml

# Environment file paths
ENV_FILE_BACKEND=docker-with-typescript-backend/.env
ENV_FILE_FRONTEND=docker-with-nextjs-frontend/.env.local

# Docker Compose commands
up:
	@echo "🚀 Starting all containers..."
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) up -d

down:
	@echo "🛑 Stopping and removing all containers & volumes..."
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) down -v

restart: down up

logs:
	@echo "📜 Showing logs (follow mode)..."
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) logs -f

logs-backend:
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) logs -f backend

logs-frontend:
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) logs -f frontend

logs-db:
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) logs -f mongodb

ps:
	@echo "📦 Container status:"
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) ps

build:
	@echo "🔨 Building images (if Docker files are present locally)..."
	$(COMPOSE) -p $(PROJECT_NAME) -f $(DOCKER_COMPOSE_FILE) build

prune:
	@echo "🧹 Pruning dangling containers and volumes..."
	docker system prune -f
	docker volume prune -f

rebuild: down build up

env:
	@echo "📁 Backend env file: $(ENV_FILE_BACKEND)"
	@if [ -f $(ENV_FILE_BACKEND) ]; then \
		echo "🔑 Backend Environment Variables:"; \
		cat $(ENV_FILE_BACKEND); \
	else \
		echo "⚠️  Backend env file not found."; \
	fi 
	@echo ""
	@echo "------------------------------------------"
	@echo "📁 Frontend env file: $(ENV_FILE_FRONTEND)"
	@if [ -f $(ENV_FILE_FRONTEND) ]; then \
		echo "🔑 Frontend Environment Variables:"; \
		cat $(ENV_FILE_FRONTEND); \
	else \
		echo "⚠️  Frontend env file not found."; \
	fi

