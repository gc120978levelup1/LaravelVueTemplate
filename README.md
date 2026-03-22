# LaravelVueTemplate
Laravel + Vue3 + Docker Project Template


Clone this Project
```sh
git clone --recursive https://github.com/gc120978levelup1/LaravelVueTemplate.git
```


### Install WSL2 and an Ubuntu Image Distro
### Install, Setup and Enable Integration WSL2 with Docker Desktop


Install laravel and node ddependencies
```sh
docker system prune -f
composer install
npm install
npm run build
```

Setup Linux, Apache, MySQL, PhpMyAdmin and Redis Server
```sh
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

### For Further guide please refer the topics below
================================================================================================================================

# [Guide For BackEnd Coding](https://github.com/gc120978levelup1/ss_LAMP_Docker/blob/master/README%20file%20Backend%20Guide.md)

# [Guide For FrontEnd Coding](https://github.com/gc120978levelup1/ss_LAMP_Docker/blob/master/README%20file%20Frontend%20Guide.md)
