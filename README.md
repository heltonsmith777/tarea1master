# tarea1master - Helton Bustos #
## 221131770_61 Bootcamp: Tecnologías para el desarrollo web ##


### Ejercicios a realizar: ### 
1) > [OK] Instalar un IDE en vuestra máquina. 
2) > [OK] Crearse un perfil de GitHub
3) > [OK] Crearse un repo personal en GitHub
4) > [OK] Desplegar una base de datos de MongoDB en un container de Docker con
5) > [OK] persistencia. 
6) > [OK] Crear una API sencilla con Nodejs
7) > [OK] Dockerizar la API del punto 5
8) > [OK] Subir a un repo público de GitHub el repositorio creado para realizar el punto 5 y 6.


### Importante: ### 
#### Se crearon los siguientes tres servicios en un contenedor Docker a traves de **Docker Compose** ####
1) API NodeJs
2) MongoDB
3) Mongo-Express

### Instrucciones iniciales: ### 

1) Clonar repositorio
2) Al descargar repositorio, instalar dependencias npn
> npm install
3) Instalar Docker Desktop e iniciarlo

### Comandos: ###

1) Ejecutar DockerCompose
> docker-compose up -d

2) Eliminar contenedores (probar persistencia de datos) [para reinicarlo]
> docker-compose down

### RUTAS: ###
#### Verificación de salud del servicio [GET] ####
> localhost:4000/

#### Obtener datos de persona [GET] ####
> localhost:4000/api/obtenerPersonas

#### Crear nueva persona [POST] ####
> localhost:4000/api/crearPersonas
