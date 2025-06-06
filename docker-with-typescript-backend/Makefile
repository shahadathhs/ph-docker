# === Logs ===
prepare-logs:
	mkdir -p logs

# === Build ===
build-latest:
	docker build -t shahadathhs/my-ts-app:latest .

build-prod:
	docker build -t shahadathhs/my-ts-app:prod --target=production .

# === Push ===
push-latest:
	docker push shahadathhs/my-ts-app:latest

push-prod:
	docker push shahadathhs/my-ts-app:prod

# === Volume: Create ===
create-volume-latest:
	docker volume create ts-app-logs-latest

create-volume-prod:
	docker volume create ts-app-logs-prod

# === Volume: Remove ===
remove-volume-latest:
	docker volume rm ts-app-logs-latest

remove-volume-prod:
	docker volume rm ts-app-logs-prod

# === Run (Bind Mount) ===
run-latest:
	docker run --env-file .env -v "$$(pwd)/logs:/app/logs" -p 5000:3000 --name ts-app-container-latest shahadathhs/my-ts-app:latest

run-prod:
	docker run --env-file .env -v "$$(pwd)/logs:/app/logs" -p 5000:3000 --name ts-app-container-prod shahadathhs/my-ts-app:prod

run-temp-latest:
	docker run --rm --env-file .env -v "$$(pwd)/logs:/app/logs" -p 5000:3000 --name ts-app-container-latest shahadathhs/my-ts-app:latest

run-temp-prod:
	docker run --rm --env-file .env -v "$$(pwd)/logs:/app/logs" -p 5000:3000 --name ts-app-container-prod shahadathhs/my-ts-app:prod

# === Run (Named Volume) ===
run-latest-volume:
	docker run --env-file .env -v ts-app-logs-latest:/app/logs -p 5000:3000 --name ts-app-container-latest shahadathhs/my-ts-app:latest

run-prod-volume:
	docker run --env-file .env -v ts-app-logs-prod:/app/logs -p 5000:3000 --name ts-app-container-prod shahadathhs/my-ts-app:prod

run-temp-latest-volume:
	docker run --rm --env-file .env -v ts-app-logs-latest:/app/logs -p 5000:3000 --name ts-app-container-latest shahadathhs/my-ts-app:latest

run-temp-prod-volume:
	docker run --rm --env-file .env -v ts-app-logs-prod:/app/logs -p 5000:3000 --name ts-app-container-prod shahadathhs/my-ts-app:prod

# === Start ===
start-latest:
	docker start ts-app-container-latest

start-prod:
	docker start ts-app-container-prod

start-attached-latest:
	docker start -a ts-app-container-latest

start-attached-prod:
	docker start -a ts-app-container-prod

# === Stop ===
stop-latest:
	docker stop ts-app-container-latest

stop-prod:
	docker stop ts-app-container-prod

# === Restart ===
restart-latest:
	docker stop ts-app-container-latest || true
	docker start -a ts-app-container-latest

restart-prod:
	docker stop ts-app-container-prod || true
	docker start -a ts-app-container-prod

# === Remove Containers ===
remove-container-latest:
	docker rm ts-app-container-latest

remove-container-prod:
	docker rm ts-app-container-prod

# === Remove Images ===
remove-image-latest:
	docker rmi shahadathhs/my-ts-app:latest

remove-image-prod:
	docker rmi shahadathhs/my-ts-app:prod

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
	docker logs -f ts-app-container-latest

logs-follow-prod:
	docker logs -f ts-app-container-prod

# === Exec ===
exec-shell-latest:
	docker exec -it ts-app-container-latest sh

exec-shell-prod:
	docker exec -it ts-app-container-prod sh

# === Env Check ===
check-env:
	@echo "Printing .env variables:"
	@cat .env

# === Prune & Clean ===
prune-all:
	docker container prune -f
	docker image prune -f
	docker volume prune -f

clean-hard:
	-docker stop ts-app-container-latest
	-docker stop ts-app-container-prod
	-docker rm ts-app-container-latest
	-docker rm ts-app-container-prod
	-docker rmi shahadathhs/my-ts-app:latest
	-docker rmi shahadathhs/my-ts-app:prod
	docker container prune -f
	docker image prune -f
	docker volume prune -f

# === View Volume, Images & Containers ===
view-containers:
	docker ps -a

view-running:
	docker ps

view-images:
	docker images

view-volumes:
	docker volume ls