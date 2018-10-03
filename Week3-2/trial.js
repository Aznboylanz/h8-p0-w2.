// for (var i=1; i<records.length; i++){
//     for (var j=records.length; j<1; j--){
//         if (parseInt(records[i-1]) < parseInt(records[i])){
//             var temp = records[i-1];
//             records[i-1] = records[i]
//             records[i] = temp;
//         }   
//     }    
// }

var number = ['7', '2', '3' , '4' , '5', '1']
var result = 10;
for(var i = 0 ; i < number.length; i++){
    if(result < number[i]){
        console.log(result)
    }else if( result > number[i])
    result = number[i]
    
}console.log(result)