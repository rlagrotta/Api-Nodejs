# Tarea de la cursada

 **Hola,**. Para ver la tarea de cursada tendrá que descargar este repositorio, crear la base de datos en mongo db con el json que está en la carpeta db sample y correr el api desde una terminal con el comando node server.js. 

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
