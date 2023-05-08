# Tarea de la cursada

Hola, **Profesor**. Para ver la tarea de cursada simplemente tendrá que descargar este repositorio para correrlo desde el localhost:3000 con el contenedor que dice practicas docker encendido que es el que tiene la base de datos mongo. No pude meter ambos contenedores juntos o ponerlos a correr ambos desde el docker asi que el mongo corre en el docker y el api corre desde el localhost. 


# Conexión a la base de datos

Para poder ver que se conecta a la base de datos unicamente tendrá que desde el navegador ir a  **localhost:3000/** y el navegador le dará un aviso de que está conectado. 

## Ruta de la bd

Para ver impresa la base de datos con todos los archivos tendrá que meterse a **localhost:3000/beisbolistas** Esta le dará toda la información que tiene la base de datos.

## Buscar especificos

Para buscar especificos podrá escribir **localhost:3000/beisbolistas/buscar?query** esta podría ser por ejemplo http://localhost:3000/beisbolistas/buscar?equipo=Yankees

## Modificar

Desde Postman o un editor http podría modificar algun campo de la base de datos enviando una petición **PUT** a beisbolistas seguido por el id **/beisbolistas/:id** button in the file explorer.

## Borrar 

Podrás borrar enviando una petición de borrar enviando una petición **DELETE** seguido por el query . Ejemplo:   
 http://localhost:3000/beisbolistas?nombre=Clayton  .