Requirements:<br>
    1. Npm<br>
    2. MySQL<br>
    3. Laravel<br>
How to run (with ubuntu commands in quotation marks):<br>
    1. Clone the repository<br>
    2. "cd /RockPaperScissors_LaravelVue"<br>
    3. "npm install"<br>
    4. Rename .env.example to .env. Configure connection to your MySQL database in the .env file (lines 9-14)<br>
    5. "npm run dev" or "npm run production"<br>
    6. "composer install"<br>
    7. "php artisan migrate"<br>
    8. "php artisan key:generate"<br>
    9. "php artisan serve"<br>
    10. Enter 'http://localhost:8000/' address in your browser.<br>
    11. Enjoy!<br>

    WARNING:
        In case your laravel uses other port than 8000 you may need to change Axios urls in GameComponent.vue and HistoryComponent.vue
