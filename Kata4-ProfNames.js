const instructorWithLongestName = function(instructors) {
  var longestNameInstructor = instructors[0]
  
  for (let i = 0; i < instructors.length; i++){
    
    if (instructors[i].name.length > longestNameInstructor.name.length){
      longestNameInstructor = instructors[i];
    }
    

  }
  return longestNameInstructor
};




console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


// need a name.length to count number of letters