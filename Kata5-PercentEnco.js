const urlEncode = function(text) {
  let newLine = "";
  text = text.trim()
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newLine += "20%"
    }
    else {
      newLine += text[i]
    }
  }
  return newLine;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));