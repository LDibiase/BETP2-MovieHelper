const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/genres',
  headers: {

    //subir a heroku
    'x-rapidapi-key': '469bf30c58msh1ef857e24e9a20bp1d69dcjsn99a37afaf88a',
    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
  }
};

function codeGenre(codigo){
    axios.request(options).then(function (response) {
	    return response.data.codigo
}).catch(function (error) {
	console.error(error);
});
};
