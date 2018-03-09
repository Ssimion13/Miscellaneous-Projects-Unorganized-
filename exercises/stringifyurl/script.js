let endpoint = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler"
}
/*

function stringifyURL(endpoint, query){
  let string = endpoint;
  string += "?"
  for(var property in query){
    if(query.hasOwnProperty(property)){
       string += property + "=" + query[property] + "&"
    }
  }
  if(string[string.length -1] === "&"){
    string = string.substring(0, string.length -1);

  }

  return string;
}

console.log(stringifyURL(endpoint, query));
*/

var url = "http://localhost:8080/monkeys?color=black&species=howler"

function unstringifyURL(url){
var endpoint = url.substring(0, url.indexOf("?"));
var unsplitQueries = url.substring(url.indexOf("?"), url.length );
unsplitQueries = unsplitQueries.substring(1, unsplitQueries.length)
var string = "";
var array = [];
console.log(unsplitQueries.length);
for (let i = 0; i < unsplitQueries.length + 1; i++){

  if(unsplitQueries[i] === "&" || unsplitQueries[i] === "=" || i === (unsplitQueries.length)){
    array.push(string);
    string = "";
    i += 1;
  }
      string += unsplitQueries[i];
}
console.log(array);
var objectName = "";
var objectProperty = "";
var newObject = {};
let k = 0;
for(let j = 0; j < array.length -2; j++){

  objectName =  array[k];
  objectProperty = array[k+1];
  newObject[objectName] =  objectProperty;
  objectName = "";
  objectProperty = "";
  k += 2


}
console.log(newObject);
}


unstringifyURL(url);
