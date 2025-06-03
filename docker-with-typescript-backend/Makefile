pull:
	docker pull shahadathhs/my-ts-app:latest

build:
	docker build -t shahadathhs/my-ts-app:latest .

run:
	docker run --rm --env-file .env -p 5000:3000 --name ts-app-container shahadathhs/my-ts-app:latest

stop:
	docker stop ts-app-container

push:
	docker push shahadathhs/my-ts-app:latest

clean:
	docker container prune
	docker image prune