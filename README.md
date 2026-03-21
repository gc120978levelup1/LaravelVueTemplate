# LaravelVueTemplate
Laravel + Vue3 + Docker Project Template

### Install WSL2 and an Ubuntu Image Distro
### Install, Setup and Enable Integration WSL2 with Docker Desktop

Setup Linux, Apache, MySQL, PhpMyAdmin and Redis Server
```sh
docker rm -f $(docker ps -a -q)
docker network rm $(docker network ls -q --filter driver=bridge --filter name=^((?!bridge|host|none).)*$)
composer install
npm install
npm run build
git clone --recursive https://github.com/gc120978levelup1/ss_LAMP_Docker.git
cd ss_LAMP_DOCKER
./ss merge
cd ..
./ss up
```

Migrate Laravel to MySQL database
```sh
./ss migrate
```

Initialize your Laravel project
```sh
composer require league/flysystem-aws-s3-v3 "^3.0" --with-all-dependencies
composer require laravel/wayfinder
php artisan key:generate
php artisan storage:link
./ss migrate
```

Install Leaflet for mapping and others
```sh
npm install radix-ui
npm install @radix-ui/colors
npm add radix-vue
npm add reka-ui
npm install leaflet
npm install bootstrap
npm install bootstrap-icons
npm install uid
npm install @iconify/vue
npm install @popperjs/core
npm install -D sass-embedded
npm install -D @laravel/vite-plugin-wayfinder
npm run build
```

Integrate wayfinder to Vue3 through vite.config.js
```sh
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { wayfinder } from "@laravel/vite-plugin-wayfinder"; // Import the wayfinder plugin

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        wayfinder(), // Add the wayfinder plugin to the plugins array
        // ... other plugins
    ],
});
```

Run Front End Build
```sh
npm run build
```

Run Development Server
```sh
./ss dev
```
