
var square = document.getElementById('square');

square.addEventListener("mouseover", function(event){
  square.style.backgroundColor = "Blue";
});
window.addEventListener("keydown", function(event){
  switch (event.keyCode) {

   case 66:
     square.style.backgroundColor = "Blue";
     break;

   case 82:
     square.style.backgroundColor = "Red";
     break;

   case 79:
     square.style.backgroundColor = "Orange";
     break;

   case 89:
     square.style.backgroundColor = "Yellow";
     break;
   case 71:
     square.style.backgroundColor = "Green";
     break;
  }
});


square.addEventListener("mousedown", function(event){
  square.style.backgroundColor = "Red";
});

square.addEventListener("wheel", function(event){
  square.style.backgroundColor = "Orange";
});

square.addEventListener("mouseup", function(event){
  square.style.backgroundColor = "Yellow";
});

square.addEventListener("dblclick", function(event){
  square.style.backgroundColor = "Green";
});
