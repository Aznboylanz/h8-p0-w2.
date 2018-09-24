// function factorial(num){
//   if ( num === 10){
//     return num
//   }
//
//     var modiNum = num - 1;
//     return num * factorial(++num)
//
// }
//
// console.log(factorial(5))

// function balikKata(str){
//   if (balikKata === str){
//     return str;
//   }
//   else{
//
//   }
// }

function countDistance(kata, str){
  var letter = kata[0]
  if (letter === str){
    return 1
  }
  else {
    var str1 = str.substring[1];
      return 1 + countDistance(kataModify, str);
    }

  }



}
console.log(countDistance("abababas", 's'))
