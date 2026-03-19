# LaravelVueTemplate
Laravel + Vue3 + Docker Project Template

### Setup Docker Apache + PhP + PhpMyAdmin + MySQL + Redis

All this Host Names can be found in docker-compose.yml file
```sh
git clone --recursive https://github.com/gc120978levelup1/ss_LAMP_Docker.git
cd ss_LAMP_DOCKER
./ss merge
cd ..
./ss up
```

Migrate MySQL database
```sh
./ss migrate
```

Initialize your Laravel project
```sh
npm install
composer install
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

vite.config.js
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
