//Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.


function xo(str) {
    var check = false;
    var totalX =0;
    var totalO = 0;
    
    for(var i = 0; i < str.length; i++){
    //    console.log(str[i])
       if(str[i]=== 'o'){
           totalO = totalO + 1;
       }else{
           totalX = totalX + 1;
       }
    }
    if (totalX === totalO){
        check = true;
    }
    return check
    
}
  
//   TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
/**
 x
 o
 x
 o
 x
 o

 x == o
 */