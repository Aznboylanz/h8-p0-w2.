 function reverseWord(word) {
     var temp = '';
     for ( var i = word.length-1 ; i >= 0; i--){
         temp += word[i]
     }
     console.log(temp)
 }      
        

 reverseWord('Hello World!')