# === Network ===
create-network:
	docker network create ph-docker-network

remove-network:
	docker network rm ph-docker-network || true

# === Build ===
build-latest:
	docker build -t shahadathhs/my-next-app:latest .

build-prod:
	docker build -t shahadathhs/my-next-app:prod --target=production .

# === Push ===
push-latest:
	docker push shahadathhs/my-next-app:latest

push-prod:
	docker push shahadathhs/my-next-app:prod

# === Run ===
run-latest:
	docker run --env-file .env.local \
		-p 3000:3000 \
		--name next-app-container-latest \
		-v "$$(pwd)":/app \
		-v /app/node_modules \
		--network ph-docker-network \
		-e WATCHPACK_POLLING=true \
		shahadathhs/my-next-app:latest

run-prod:
	docker run --env-file .env.local \
		-p 3000:3000 \
		--name next-app-container-prod \
		-v "$$(pwd)":/app \
		-v /app/node_modules \
		--network ph-docker-network \
		-e WATCHPACK_POLLING=true \
		shahadathhs/my-next-app:prod

run-temp-latest:
	docker run --rm --env-file .env.local \
		-p 3000:3000 \
		--name next-app-container-latest \
		-v "$$(pwd)":/app \
		-v /app/node_modules \
		--network ph-docker-network \
		-e WATCHPACK_POLLING=true \
		shahadathhs/my-next-app:latest

run-temp-prod:
	docker run --rm --env-file .env.local \
		-p 3000:3000 \
		--name next-app-container-prod \
		-v "$$(pwd)":/app \
		-v /app/node_modules \
		--network ph-docker-network \
		-e WATCHPACK_POLLING=true \
		shahadathhs/my-next-app:prod

# === Start ===
start-latest:
	docker start next-app-container-latest

start-prod:
	docker start next-app-container-prod

start-attached-latest:
	docker start -a next-app-container-latest

start-attached-prod:
	docker start -a next-app-container-prod

# === Stop ===
stop-latest:
	docker stop next-app-container-latest

stop-prod:
	docker stop next-app-container-prod

# === Restart ===
restart-latest:
	docker stop next-app-container-latest || true
	docker start -a next-app-container-latest

restart-prod:
	docker stop next-app-container-prod || true
	docker start -a next-app-container-prod

# === Remove Containers ===
remove-container-latest:
	docker rm next-app-container-latest

remove-container-prod:
	docker rm next-app-container-prod

# === Remove Images ===
remove-image-latest:
	docker rmi shahadathhs/my-next-app:latest

remove-image-prod:
	docker rmi shahadathhs/my-next-app:prod

# === Rebuild ===
rebuild-latest:
	make stop-latest
	make remove-container-latest
	make build-latest
	make run-latest

rebuild-prod:
	make stop-prod
	make remove-container-prod
	make build-prod
	make run-prod

rebuild-latest-volume:
	make stop-latest
	make remove-container-latest
	make build-latest
	make run-latest-volume

rebuild-prod-volume:
	make stop-prod
	make remove-container-prod
	make build-prod
	make run-prod-volume

# === Logs ===
logs-follow-latest:
	docker logs -f next-app-container-latest

logs-follow-prod:
	docker logs -f next-app-container-prod

# === Exec ===
exec-shell-latest:
	docker exec -it next-app-container-latest sh

exec-shell-prod:
	docker exec -it next-app-container-prod sh

# === Env Check ===
check-env:
	@echo "Printing .env.local variables:"
	@cat .env.local

# === Prune & Clean ===
prune-all:
	docker container prune -f
	docker image prune -f
	docker volume prune -f

clean-hard:
	-docker stop next-app-container-latest
	-docker stop next-app-container-prod
	-docker rm next-app-container-latest
	-docker rm next-app-container-prod
	-docker rmi shahadathhs/my-next-app:latest
	-docker rmi shahadathhs/my-next-app:prod
	docker container prune -f
	docker image prune -f
	docker volume prune -f
	docker network prune -f

# === View Volume, Images & Containers & Networks ===
view-containers:
	docker ps -a

view-running:
	docker ps

view-images:
	docker images

view-volumes:
	docker volume ls

view-networks:
	docker network ls
