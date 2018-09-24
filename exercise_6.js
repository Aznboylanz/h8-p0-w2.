Function SumVocal(array){
  var result = ;
  var vowels = [a , e, i, o, u];
  var letters = ;
  for(var i = 0; i < array.length; i++){
    var letters = i;
    if(array === vowels){
      letters= letters + 1;
      console.log(letters)
    }
    else if( array !== vowels){
      letters = letters - 1;
     }
     else(array === -1);

  }
  // return result
}

console.log(sumVocal(ABCED))
