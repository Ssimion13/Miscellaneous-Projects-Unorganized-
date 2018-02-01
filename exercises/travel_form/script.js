

var button = document.getElementById("button");
var firstName = document.getElementById('fName');
var lastName = document.getElementById('lName');
var age = document.getElementById('age');
var gender = document.getElementsByName('gender')
  var locations = document.getElementsByName('location')
var diets = document.getElementsByName('diet')


function dietCheck(diet){
  var dietList = [];
  for( var i = 0; i <diet.length; i++) {
   if(diet[i].checked){
     dietList.push(diet[i].value);
   }
  }
  return dietList;
}

function genderCheck(radios){
  for( var i = 0; i < radios.length; i++){
    if(radios[i].checked){
      return radios[i].value;
      break;
    }
  }
}

function locationCheck(locations){

  var checkedLocations = [];
  for( var j = 0; j < locations.length; j++){
    if(locations[j].checked){
      checkedLocations.push(locations[j].value);
    }
  }
  return checkedLocations;
}






document.getElementById('button').addEventListener("click", function(){


  alert( "First Name: " + firstName.value + "\n" +
         "Last Name: " + lastName.value + "\n" +
         " Age: " + parseInt(age.value) + "\n" +
         "Gender: " + genderCheck(gender) + "\n" +
         "Location(s): " + locationCheck(locations) + "\n" +
         " Dietary Restrictions: " + dietCheck(diet) );

});
