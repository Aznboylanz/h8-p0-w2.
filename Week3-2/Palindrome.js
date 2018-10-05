function palindrome(word) {
    var result = false;

    for (var i = 0; i < word.length; i++) {
        for (var j = word.length; j >= 0; j--) {
            if(word[i] === word[j]){
                result = true;
            }
            else if(word[i] !== word[j]){
                result = false;
            }
        }
    }
    return result
}

// TEST CASES
console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false