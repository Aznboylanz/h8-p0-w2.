function angkaPalindrome(num) {
  var result = 0;
  if (num < 9) {
    return num + 1;
  }
  else if (num > 9) {
    //  num++ have to be outside the loop because if its inside j won't change
    num++
    for (var j = num; true; j++) {
      
      var str = j.toString()
      // console.log(str)
      var reverse = '';
      for (var i = str.length - 1; i >= 0; i--) {
        // you have to use -1 because when str reads "_, 0, 1" there's a space, you have to subtract the space
        reverse = reverse + str[i]
      }
      if(reverse == j){
        result = j
        return result
      }
    }
  }
}

// TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
  //  console.log(angkaPalindrome(117)); // 121
   console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001