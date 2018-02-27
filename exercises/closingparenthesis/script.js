function balanceParenthesis(str){
   //make sure every opening parenthesis has a closing one
   //and of course, the other way around
  const sArray = str.split("");
var checkOP = 0;
var checkED = 0;
  for( let i = 0; i < sArray.length; i++){
    //check if every opening has a closing
    if(sArray[i] === "("){
      checkOP++;
    }
    if(sArray[i] === ")"){
      checkED++;
    }

}
return checkOP === checkED;
}


console.log(balanceParenthesis(")()("));
