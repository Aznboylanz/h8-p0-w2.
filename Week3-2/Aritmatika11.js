function tentukanDeretAritmatika(arr) {
    var check = true;
    var num = [];
    for (var i = 0; i < arr.length-1; i++) {
       num.push(arr[i] - arr[i+1])    
       }
       for ( var j = 0 ; j < num.length-1 ; j++){
           if(num[j] !== num[j + 1]){
               check = false
           }
       }
    return check  
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false