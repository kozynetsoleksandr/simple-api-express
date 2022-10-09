<p align="center">
    <h1 align="center">Simple apt for Onix by Kozynets Oleksandr</h1>
    <br>
</p>
### Start project with docker 

Copy repository

    git clone https://github.com/kozynetsoleksandr/simple-api-express

Create container for app

    docker build -t nodejs-api-image .  
    
Start the container

    docker run --name nodejs-api-image -p 3000:3000 -d nodejs-api-image
    
You can then access the application through the following URL:

    http://127.0.0.1:3000
