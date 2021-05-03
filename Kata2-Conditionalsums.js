




const conditionalSum = function(values, condition){
    let totalSum = 0
  for ( i = 0; i < values.length; i++){
    if ((condition === "even") && (values[i] % 2 === 0)){
      totalSum += values[i]
      

    } else if ((condition === "odd") && (values[i] % 2 === 1)){
      totalSum += values[i]
      


    }
    
  }
  return totalSum
}



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
