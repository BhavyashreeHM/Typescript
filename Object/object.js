var student = {
    firstname: "Bhavya",
    lastname: "shree",
    score: 90
};
console.log(student.firstname);
console.log(student.score);
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
var firstname = student.firstname, lastname = student.lastname;
console.log(firstname);
console.log(lastname);
