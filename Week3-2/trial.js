// for (var i=1; i<records.length; i++){
//     for (var j=records.length; j<1; j--){
//         if (parseInt(records[i-1]) < parseInt(records[i])){
//             var temp = records[i-1];
//             records[i-1] = records[i]
//             records[i] = temp;
//         }   
//     }    
// }

var number = ['71', '210', '3' , '45' , '8', '1010']
console.log(number)
var numberArray = Number(number);
// console.log(numberArray)
for(var i = 0 ; i < numberArray.length ; i++){
    var trial = 0;
    if(numberArray[i] < numberArray[i+1]){
        trial = numberArray[i] ;
        numberArray[i] = numberArray[i+1];
        numberArray[i+1] = trial    
    // }
}
// console.log(typeof umberArray)
