function isIP(str){
  var newStr = str.split(".");
  console.log(newStr.length);
  if(newStr.length !== 4){
    return false;
  }
  for(let i = 0; i < 4; i++){
      newStr[i] = Number(newStr[i]);
    if(newStr[i] < 0 || newStr[i] > 255 ){
     return false;
   } else {
     return true;
 }
}
}


console.log(isIP("244.168.1.a"));
