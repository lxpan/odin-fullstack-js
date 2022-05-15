function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

// sets EighthGrader's prototype to that of Student's prototype
EighthGrader.prototype = Object.create(Student.prototype) // create new object with student's prototype
const carl = new EighthGrader("Carl");
carl.sayName()