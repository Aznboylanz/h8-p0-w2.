var nama = 'Enter Name'
var peran = 'Choose Character'
  
//name conditions//
if (nama === 'Enter Name'){
  console.log('Please enter a "NAME"');
}else if (nama === 'Micheal'){
  console.log('Hello Micheal, please choose a CHARACTER to Start!');
}else if (nama === 'Nina'){
  console.log('Welcome to the World of Proxytia, Nina');
}else if (nama === "Danu"){
  console.log('Welcome to the World of Proxytia, Danu');
}else if (nama === "Zero"){
  console.log('Welcome to the World of Procytia, Zero');
}

//character condition//
if (peran === 'Choose Character'){
  console.log('Please choose a character');
}else if(peran === 'Ksatria'){
  console.log('Hello Ksatria',nama,',you have attacked with your sword!');
}else if(peran === 'Tabib'){
  console.log('Hello Tabib',nama,',you have helped your wounded friend.');
}else if (peran === 'Penyihir'){
  console.log('Hello Penyihir',nama,',you\'ve created miracles that helped your victory!');
}
