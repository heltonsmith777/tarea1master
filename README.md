# tarea1master - Helton Bustos #
## 221131770_61 Bootcamp: Tecnologías para el desarrollo web ##


### Ejercicios a realizar: ### 
> [OK] Instalar un IDE en vuestra máquina. 
> [OK] Crearse un perfil de GitHub
> [OK] Crearse un repo personal en GitHub
> [OK] Desplegar una base de datos de MongoDB en un container de Docker con
> [OK] persistencia. 
> [OK] Crear una API sencilla con Nodejs
> [OK] Dockerizar la API del punto 5
> [OK] Subir a un repo público de GitHub el repositorio creado para realizar el punto 5 y 6.


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
