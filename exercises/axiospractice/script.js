var axios = require("axios");


axios.get('https://swapi.co/api/people/1').then(function(response){
    console.log(response.data);
  });
