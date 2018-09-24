function secondSmallest(numbers){
  var SmallestNumbers =[0];
  for(let i = 0 ; i < numbers.length; i++){
//check the smallest number in the array
    if(numbers[i] < SmallestNumbers[i]){
      //cheack the SECOND smallest number compared to the smallest number
      secondSmallest = SmallestNumber;
      SmallestNumbers = numbers[i];
      indexSmallestNumber = i;
    }
     else if(numbers[i] < secondSmallest){
      secondSmallest = numbers[i];
    }
  }
  return SmallestNumber
}


/*
SmallestNumber= 999
SecondSmallest
