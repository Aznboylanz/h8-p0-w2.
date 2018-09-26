for(var i = 0 ; i < 5 ; i++){
   console.log('*'); 
}
var row2 = 5
var row3 = 3
for(var i = 0 ; i <row2 ; i++){
    str = ''
    for(var j = 0 ; j < row3 ; j++){
        str = str + '*'
    }
    console.log(str)
}

var row3 = 5
for(var i = 0 ; i < row3; i++){
    str = '';
    for( var j = 0 ; j <= i; j++){
        str = str + '*'
    }
    console.log(str)
}