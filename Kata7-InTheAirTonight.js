const checkAir = function (samples, threshold) {
  let cleanS = 0
    let dirtyS = 0
    const total = []
    let result = ''
    for(let i = 0; i < samples.length; i++){
    
    if (samples[i] === 'clean'){
      cleanS++
    } else if (samples[i] === 'dirty'){
      dirtyS++
    }
    
  }
  total.push(dirtyS/(dirtyS + cleanS))
    if (total[0] <= threshold){
      result = 'Clean'
    } else if(total[0] >= threshold){
      result = 'Polluted'
    }
  return result
}




console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))