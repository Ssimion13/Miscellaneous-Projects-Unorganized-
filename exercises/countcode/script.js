function countCode(arr){
  var counter = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === "c"){
      if(arr[i+1] === "o" && arr[i+3] === "e"){
        counter++;
      }
    }
  }
  console.log(counter);
  return counter;
}

countCode("aaacodebbb");
countCode("codexxcode");
countCode("cozexxcope");
