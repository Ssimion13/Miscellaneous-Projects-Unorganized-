

  var newToDo = {};

var me = axios.get("https://api.vschool.io/scottsimion/todo").then(function(response){
  let info = response.data;
  let ul = document.getElementById('table1');

  for(var i = 0; i < info.length; i++){
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(info[i].title));
  ul.appendChild(li);
}
    
let myList = document.getElementsByTagName("LI");
for(var j = 0; j < myList.length; j++){

  let span = document.createElement("span");
 let txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 myList[j].appendChild(span);
}
})

document.getElementById('button2').addEventListener("click", function(){
  newToDo.price = document.getElementById("input2").value;
});

document.getElementById('button3').addEventListener("click", function(){
  newToDo.description = document.getElementById("input3").value;
});

document.getElementById('button1').addEventListener("click", function(){

    newToDo.title = document.getElementById('input1').value;
    console.log(newToDo.title);
  let ul = document.getElementById('table1');
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(newToDo.title));
  ul.appendChild(li);
  console.log(newToDo);
  axios.post("https://api.vschool.io/scottsimion/todo", newToDo).then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  });


});

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);
