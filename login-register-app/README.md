md

# AngularJS, Node.js (Express), MySQL, NginX Project

## Project Setup Guide

This project demonstrates a full-stack web application using **AngularJS** for the frontend, **Node.js (Express)** for the backend, **MySQL** as the database, and **NginX** for the web server.

---

## Prerequisites

### For Local Installation:
- **Node.js** (v18 or above) - [Download from here](https://nodejs.org/en/download/)
- **Angular CLI** (latest version)
- **MySQL** (v5.7 or above)
- **NginX** (for deployment)
- **Git** (optional)

### For Docker Installation:
- **Docker** (latest version) - [Download from here](https://www.docker.com/products/docker-desktop)
- **Docker Compose** (included with Docker Desktop)

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository

Step 2: Local Installation
2.1 Backend Setup (Node.js & MySQL)

    Navigate to the backend directory:

    bash

cd backend

Install the dependencies:

bash

npm install

Create a .env file in the backend folder and add your environment variables:

bash

touch .env

Example .env file:

makefile

NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yasserdb
JWT_SECRET=your_jwt_secret

Create a MySQL database:

Open MySQL command-line or any GUI tool (e.g., MySQL Workbench) and run the following command:

sql

CREATE DATABASE yasserdb;

Run the backend server:

bash

    npm start

    The backend server will start at http://localhost:3000.

2.2 Frontend Setup (AngularJS)

    Navigate to the frontend directory:

    bash

cd frontend

Install Angular dependencies:

bash

npm install

Run the Angular development server:

bash

    ng serve --open

    The frontend server will be available at http://localhost:4200.

2.3 Configure NginX for Deployment

    Install NginX on your local machine.
        For Ubuntu:

    bash

sudo apt update
sudo apt install nginx

Configure NginX by editing the default configuration file:

bash

sudo nano /etc/nginx/sites-available/default

Add the following configuration:

perl

server {
    listen 80;
    server_name localhost;

    location / {
        root /path/to/your/frontend/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3000/;
    }
}

Restart NginX to apply the configuration:

bash

    sudo service nginx restart

Step 3: Docker Installation
3.1 Setup Docker Containers

    Create a .env file for Docker in the root of your project folder:

    makefile

DB_HOST=mysql
DB_USER=root
DB_PASSWORD=password
DB_NAME=yasserdb
JWT_SECRET=your_jwt_secret

Build and run the Docker containers:

From the root of your project directory, run the following command:

bash

    docker-compose up --build

    This command will build and start the backend, frontend, and MySQL containers.
        Frontend: http://localhost:8081
        Backend: http://localhost:3000

3.2 Access MySQL inside Docker

Run the following command to access the MySQL service:

bash

docker exec -it mysql mysql -u root -p

Enter the password password when prompted.
Step 4: Managing the Database
4.1 Creating Tables

Once inside the MySQL shell, run the following SQL to create a table:

sql

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

4.2 Viewing Tables

To view the existing tables in the database:

sql

USE yasserdb;
SHOW TABLES;

Step 5: Stopping the Application

To stop the Docker containers, run:

bash

docker-compose down

Additional Notes

    Local Development: You can run the backend and frontend servers independently with npm start and ng serve, respectively.
    Docker Deployment: Use Docker Compose for a complete setup of backend, frontend, and database services.

markdown


### Instructions:
1. Replace the placeholder `your-username` and `your-repository` in the `git clone` command with your actual GitHub repository link.
2. Update any environment-specific configurations as needed.

This `README.md` provides detailed steps for both local and Docker installations and should work well for your project

