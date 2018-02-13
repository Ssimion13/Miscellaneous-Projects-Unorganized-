
  var counter = localStorage.counter;
   document.getElementById("counter").innerHTML = 0 || localStorage.counter;

document.getElementById('button').addEventListener("click", function(){

    counter++;
    document.getElementById("counter").innerHTML = counter;
    localStorage.setItem("counter", counter);
});

document.getElementById('button2').addEventListener("click", function(){

  counter = 0;
  localStorage.counter = 0;
  document.getElementById("counter").innerHTML = 0;

})
