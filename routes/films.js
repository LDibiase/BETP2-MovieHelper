const axios = require("axios").default;
require('dotenv').config(); //para las variables de entorno



  //recibimos el nombre que mandamos a la consulta de la API
  function params (nombrePeli) {
    return {
        originalTitle: nombre,
      }
}

//traigo la info y devuelvo la pelicula
function getFilm (filmName) {
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/basic',
        params:params(filmName),
        headers: {
            //referencia de variable de entorno en heroku
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.X-RAPIDAPI-HOST
        }
      };
      return options
}

//pido genero por codigo y retorno descripcion
function getGenres(options){
axios.request(options).then(function (response) {
	//para ver que entrega console.log(response.data);
    //con el map itero generos y llamo a la funcion que entrega descripcion de genero por codigo
    return response.data.results.map ( item => {
        codeGenre(item.genres)
    });
}).catch(function (error) {
	console.error(error);
});
}

//plataforma donde se encuentra
function getPlatform(options){
    axios.request(options).then(function (response) {
        return response.data.results.streamingInfo //ver lo que entrega {}
    }).catch(function (error) {
        console.error(error);
    });
    }

    //retorno de avatar
function getAvatar(options){
    axios.request(options).then(function (response) {
        return response.data.results.posterURLs.original //ver lo que entrega {}
    }).catch(function (error) {
        console.error(error);
    });
    }





