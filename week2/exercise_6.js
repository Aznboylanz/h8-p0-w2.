
//1. Melakukan Looping Menggunakan While
// LOOPING PERTAMA
var loop1 = 2;
while(loop1 <21){
  console.log(loop1 + ' - I love coding');
  loop1 = loop1+2;
}
//LOOPING KEDUA
var loop2 = 20
while(loop2 > 0){
  console.log(loop2 + ' - I will become fullstack developer');
  loop2 = loop2 - 2;
}
//2. Melakukan Looping Menggunakan For
//Looping PERTAMA
for(var i=1; i < 21; i++){
  console.log(i + " - I love coding");
}
//Looping KEDUA
for(var a=20; a > 0; a--){
  console.log(a + " - I will become fullstack developer");
}

//3. Angka Ganjil dan Genap
for(var b = 0; b <= 100; b++){
  if(b%2 === 0){
    console.log("even");
  }else if (b%2 === 1){
    console.log("odd")
  }
}
for(var b = 1; b <= 100; b+=2){
  console.log("counter sekarang = "+ b)
  if(b%3=== 0){
      console.log(b + ' ' + "Kelipatan 3")
  }
}
for (var b = 1; b <= 100; b+=5){
  console.log("counter sekarang= "+ b)
  if(b % 6 === 0){
    console.log(b + ' ' + "Kelipatan 6")
  }
}
for(var b = 1; b <= 100; b+= 9){
  console.log("counter sekarang = " + b)
  if (b % 10 === 0){
    console.log(b + ' ' + 'Kelipatan 10')
  }

}