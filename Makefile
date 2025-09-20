up: # разворачивание и запуск
	cp -n .env.example .env
	touch database/database.sqlite
	composer install
	npm install
	php artisan key:generate
	php artisan migrate --seed
	heroku local -f Procfile.dev 

setup: env-prepare sqlite-prepare install key db-prepare 

env-prepare:
	cp -n .env.example .env

sqlite-prepare:
	touch database/database.sqlite

install:
	composer install
	npm install

key:
	php artisan key:generate

db-prepare:
	php artisan migrate --seed

start:
	heroku local -f Procfile.dev