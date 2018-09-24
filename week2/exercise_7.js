for(var i = 0; i < 5; i++){
  console.log('*')
}

var row2 = 5;
for(var i = 0; i < row2 ; i++){
  var symbol = '';
  for (var j = 0; j < row2; j++){
    symbol = symbol + '*';
  }
  console.log(symbol)
}

var row3 = 5
for(var i = 0; i < row3; i++){
  var symbol = '';
  for(var j = 0; j <= i; j++){
    symbol= symbol + "*";
  }
  console.log(symbol)
}

/*
STORE 'row3' with any value
STORE 'i' with 0
WHILE 'i' is less than 'row3'
  SET 'i' add by 1
  STORE 'symbol' with ''
  STORE 'j' with 0
  WHILE 'j' is equal to or less than 'i'
    SET 'j' add by 1
    SET 'symbol' equal to 'symbol' add with '*'
  Display 'symbol'



*/
