

function reverseWord(name){
  var hasil = ""
for(var i = name.length - 1; i >= 0; i--){
  var hasil = hasil + name[i]
}
return hasil
}

console.log(reverseWord("NEW LINE"))
console.log(reverseWord("1234567"))
