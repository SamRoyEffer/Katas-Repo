
let n1 = 0
let n2 = 0

const newSum = []
const sumLargestNumbers = function(data){
  
  for (i = 0; i < data.length; i++){
    if (data[i] > n1){
      n1 = data[i]
      newSum[1] = n1
      


    }
  }
  for (let j = 0; j < data.length; j++){
    if ((data[j] < newSum[1]) && (data[j] > n2)){
      n2 = data[j]
      newSum[0] = n2
    }
  

    

    
  }
  console.log((newSum[0]) + (newSum[1]))
 
  return newSum
};




