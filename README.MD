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

**NOTES:** 
- Minimum required Docker engine version `17.04` for development (see [Performance tuning for volume mounts](https://docs.docker.com/docker-for-mac/osxfs-caching/))
- The default configuration uses a host-volume in your home directory `.docker-composer` for composer caches
