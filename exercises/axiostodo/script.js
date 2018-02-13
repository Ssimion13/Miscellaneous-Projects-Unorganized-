
document.getElementById('button1').addEventListener("click", function(){
  let inputData = document.getElementById('input1').value;
  console.log(inputData);
  var ul = document.getElementById('table1');
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputData));
  ul.appendChild(li);


});

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);




let myList = document.getElementsByTagName("li");
for(var i = 0; i < myList.length; i++){
  var span = document.createElement("span");
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 myList[i].appendChild(span);
}
