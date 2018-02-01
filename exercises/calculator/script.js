

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');



var addFunction = function(){
  var addFirst = parseInt(document.getElementById("add1").value);

  var addSecond = parseInt(document.getElementById("add2").value);


  var addResult = (addFirst + addSecond);

     result1.innerHTML = addResult;
}



var subFunction = function(){
  var subFirst = parseInt(document.getElementById("sub1").value);
  var subSecond = parseInt(document.getElementById("sub2").value);

    var subResult = (subFirst - subSecond);

  result2.innerHTML = subResult;

}



var multiplyFunction = function(){
  var mulFirst = parseInt(document.getElementById("multi1").value);
  var mulSecond = parseInt(document.getElementById("multi2").value);

  var multiResult = (mulFirst * mulSecond);
  result3.innerHTML = multiResult;
}


button1.addEventListener("click",addFunction);
button2.addEventListener("click", subFunction);
button3.addEventListener("click", multiplyFunction);
