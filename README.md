# tarea1master - Helton Bustos #
## 221131770_61 Bootcamp: Tecnologías para el desarrollo web ##

![Image text](https://github.com/heltonsmith777/tarea1master/blob/main/evimg/visual%20studio%20code%20con%20desktop.jpg)

### Ejercicios a realizar: ### 
1) > [OK] Instalar un IDE en vuestra máquina. 
2) > [OK] Crearse un perfil de GitHub
3) > [OK] Crearse un repo personal en GitHub
4) > [OK] Desplegar una base de datos de MongoDB en un container de Docker con persistencia
5) > [OK] Crear una API sencilla con Nodejs
6) > [OK] Dockerizar la API del punto 5
7) > [OK] Subir a un repo público de GitHub el repositorio creado para realizar el punto 5 y 6.


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

![Image text](https://github.com/heltonsmith777/tarea1master/blob/main/evimg/Docker%20compose.jpg)

1) Ejecutar DockerCompose
> docker-compose up -d

2) Eliminar contenedores (probar persistencia de datos) [para reinicarlo]
> docker-compose down

![Image text](https://github.com/heltonsmith777/tarea1master/blob/main/evimg/Docker%20Desktop%20iniciado.jpg)

### RUTAS: ###

![Image text](https://github.com/heltonsmith777/tarea1master/blob/main/evimg/POSTMAN.jpg)

#### Verificación de salud del servicio [GET] ####
> localhost:4000/

#### Obtener datos de persona [GET] ####
> localhost:4000/api/obtenerPersonas

#### Crear nueva persona [POST] ####
> localhost:4000/api/crearPersonas

#### Borrar persona [DELETE] ####
> localhost:4000/api/borrarPersona

#### Actualizar persona [PUT] ####
> localhost:4000/api/actualizarPersona
