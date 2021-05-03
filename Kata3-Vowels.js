
var vowelList = ["a", "e", "i", "o", "u"]



const numberOfVowels = function(data){
  let vowels = 0
  for (let vowel of data){
  if (vowelList.includes(vowel) === true){
    
    vowels++
    
  }
  }
  return vowels
}


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));