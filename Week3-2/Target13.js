function targetTerdekat(arr) {
    var numX = null;
    var numO = null;
    var near = 0;
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i] === 'x') {
            numX = i;
        }
        if (arr[i] === 'o') {
            numO = i;
          }
        if(numO !== null && numX !== null){
            if(near === 0 || near > Math.abs( numO - numX ))
                near = Math.abs( numO - numX )
            
        }

    }
    return near;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', 'o', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2