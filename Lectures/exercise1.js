function angkaPrima(num){
  var prime = [1,2,3,5,7,9,11,13,17,19,23,29,31,37,41,43,47,59,,61,71,73,79,83,89,97];
  for ( var i = 0; i < prime.length; i++){
    var start = prime.length[i];
    if(num === start){
      console.log(true)
    }
    else{
      console.log(false)
    }
}
console.log(angkaPrima(3)); // true
