# BETP2-MovieHelper
# Descripción: 
Muchas veces queremos ver una película sin saber donde podemos encontrarla; por eso se nos ocurrió MovieHelper, una 
aplicación para poder buscar en qué plataforma de streaming se encuentra una película determinada y, a su 
vez, al loguearse, tener una opción donde obtener una lista de películas favoritas de cualquier platarforma, 
simplificando la estresante tarea de buscar plataforma por plataforma cada vez que se actualizan las mismas. 

# Funcionalidades: 
.Pantalla de login/registro 
.En la pantalla principal:
-Busqueda de peliculas
.Vista de película:
-nombre 
-Descripción de la película
-imagen del film
-protagonistas
-año
-plataformas en la que se encuentra publicada
.lista de géneros 
-Acción de favoritear
-Listado de pelis favoritas.
-Base de datos (mongoDB)

# Actores/roles:
-Usuarios

# Entidades principales:
-Usuarios
-Películas

# Instrucciones tecnicas
npm install express --save (instala express)
npm install express-generator -g (genera un "esqueleto" de la aplicación Express)
npm install axios --save (Para la instalacion de Axios)
npm install mongodb (para la base de datos)
npm install bcryptjs
npm install jsonwebtoken

# Endpoints
- Un endpoint para el login
- Un endpoint que retorne una lista de peliculas por plataforma
- Un endpoint que retorne pelicula determinada (busqueda por nombre)
- Un endpoint que retorne una lista de peliculas por genero

