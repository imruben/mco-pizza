#### I created the app using Laravel for the api and React js for the frontend.

## Installation

#### I used xampp to host the MySQL db, but can be changed in the api .env

### In the api:
##### Create a .env and set up the db info
##### Run the following commands:
```bash 
Composer update
```
```bash 
php artisan key:generate
```
##### Migrates all the tables and test data to the db
```bash 
php artisan migrate:fresh --seed
```
```bash 
php artisan serve
```

### In React 
##### Need node.js and npm
```bash 
npm install
```
```bash 
npm start
```

##### * If the api is not in localhost:8000 it has to be changed the 'api' variable in "OrderActual.jsx, OrderList.jsx, CreatePizza.jsx and PizzaList.jsx" 
