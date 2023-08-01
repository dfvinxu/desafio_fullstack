TAG=1.0

build-client:
	docker build -t desafio_client:${TAG} -f client/Dockerfile ./client
build-server:
	docker build -t desafio_server:${TAG} -f server/Dockerfile ./server

run: build-server
	docker run desafio_server:${TAG}