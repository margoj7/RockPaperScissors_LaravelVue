Requirements:
    1. Npm
    2. MySQL
    3. Laravel
How to run (with ubuntu commands in quotation marks):
    1. Clone the repository
    2. "cd /RockPaperScissors_LaravelVue"
    3. "npm install"
    4. Rename .env.example to .env. Configure connection to your MySQL database in the .env file (lines 9-14)
    5. "npm run dev" or "npm run production"
    6. "composer install"
    7. "php artisan migrate"
    8. "php artisan key:generate"
    9. "php artisan serve"
    10. Enter 'http://localhost:8000/' address in your browser.
    11. Enjoy!

    WARNING:
        In case your laravel uses other port than 8000 you may need to change Axios urls in GameComponent.vue and HistoryComponent.vue
