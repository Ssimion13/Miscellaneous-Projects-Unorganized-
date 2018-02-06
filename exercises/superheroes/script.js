var array = ["Sharknadoman", "Bubba Gump", "Bearman", "AustralianBushMan"]

for(var i = 0; i < array.length; i++){
  var liBuddy =  "<li>" + array[i] + "</li>"
    document.getElementById('tableBuddy').innerHTML += liBuddy;


}
