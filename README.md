# Docker MERN User Login
![DockerMERN](https://user-images.githubusercontent.com/2447375/104071723-bb78b280-51d7-11eb-8cef-ecfd37c43e8e.gif)

This login app is split into 3 Docker containers.

The setup is based on a great video from DevOps Directive (link [here](https://www.youtube.com/watch?v=0B2raYYH2fE))

To run from scratch 
```
docker build -t "api-server" ./server/
```
then
```
docker build -t "react-app" ./client/
```
finally
```
docker-compose up
``` 
Enjoy!

![DockerMERNlogin](https://user-images.githubusercontent.com/2447375/104073217-18c23300-51db-11eb-86cf-89320174b388.gif)
