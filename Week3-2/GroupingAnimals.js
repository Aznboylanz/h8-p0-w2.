function groupAnimals(animals) {
    var groups = [[],[],[]];

    for ( var i = 0 ; i < animals.length ; i++){
        if(animals[i][0] === 'a'){
            groups[0].push(animals[i])
        }
        else if( animals[i][0] === 'c'){
            groups[1].push(animals[i])
        }
        else if(animals[i][0] === 'k'){
            groups[2].push(animals[i])
        }
        else if(animals[i][0] === 'u'){
            groups[3] = animals[i]
        }
    }
    return groups
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]