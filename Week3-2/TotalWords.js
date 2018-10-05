function hitungJumlahKata(string) {
    // var split = string.split(' ')
    // var total = split.length;
    // return total

    var space = [];
    var words = '';
    
    for (var i = 0; i < string.length; i++) {
        if(string[i] === ' '){
            space.push(string[i])
        }
        else {
            words += string[i]
        }
    }
    var total = space.length + 1 ;
    return total
   
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5