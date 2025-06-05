# === Build & Push ===
build-dev:
	docker build -t shahadathhs/my-ts-app:latest .

build-prod:
	docker build -t shahadathhs/my-ts-app:prod --target=production .

push-latest:
	docker push shahadathhs/my-ts-app:latest

push-prod:
	docker push shahadathhs/my-ts-app:prod

# === Run ===
run-dev:
	docker run --env-file .env -p 5000:3000 --name ts-app-container shahadathhs/my-ts-app:latest

run-temp:
	docker run --rm --env-file .env -p 5000:3000 --name ts-app-container shahadathhs/my-ts-app:latest

# === Start & Stop ===
start-default:
	docker start ts-app-container

start-attached:
	docker start -a ts-app-container

stop-default:
	docker stop ts-app-container

restart-default:
	docker stop ts-app-container && docker start -a ts-app-container

# === Container Maintenance ===
remove-container:
	docker rm ts-app-container

remove-image:
	docker rmi shahadathhs/my-ts-app:latest

prune-all:
	docker container prune -f
	docker image prune -f

# === Dev Utilities ===
rebuild-dev:
	make stop-default
	make remove-container
	make build-dev
	make run-dev

logs-follow:
	docker logs -f ts-app-container

exec-shell:
	docker exec -it ts-app-container sh

check-env:
	@echo "Printing .env variables:"
	@cat .env

# === Clean Everything ===
clean-hard:
	docker stop ts-app-container || true
	docker rm ts-app-container || true
	docker rmi shahadathhs/my-ts-app:latest || true
	docker container prune -f
	docker image prune -f
