// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);

// What is returned if you attempt to access an object property that does not exist? 

//undefined is returned because that is the value implicitly assigned to a property.
// javascript will add this new property to the object
console.log(student.locker = 1);
console.log(student.locker);