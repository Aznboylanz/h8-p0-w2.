function pasanganTerbesar(num) {
    var str = num.toString()
    var array = [];
    for( var i = 0; i < str.length - 1; i++){
        array.push(str[i]+str[i+1])
    }
  
   
    for(var j = 0 ; j < array.length ; j++ ){
        var temp = 0;
        for( var h = 0 ; h < array.length; h++){
             if(array[h] < array[h+1]){
                // ways to change the the indexes
                temp = array[h];
                array[h] = array[h+1];
                //console.log(typeof array[h])
                array[h+1] = temp;
            }
        }
    }

   return array
   //console.log(array[0])
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99