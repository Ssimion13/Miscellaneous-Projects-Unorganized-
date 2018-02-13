function parsePokemon(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET","http://api.vschool.io:6543/pokemon.json", true);
  xhr.send();

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    var data = JSON.parse(xhr.responseText);
     console.log(data);
     var pokemons = data.objects[0].pokemon;
     console.log(pokemons.length);
     console.log(data.objects[0].pokemon[0].name);
    for (var i = 0; i < pokemons.length; i++){
          document.getElementById('data').innerHTML += `<h3> <strong> Name: ${data.objects[0].pokemon[i].name} </strong> </h3>`;
        }

}
}
}
parsePokemon();
