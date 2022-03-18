//arrow function
var helo = function () {
    return "Hello";
};
console.log(helo());
//normal function
function hllo() {
    return "Hello";
}
console.log(hllo());
//passing arguemwnts
var hey = function (name) {
    return "Hey" + name;
};
console.log(hey("BHavya"));
//
var multiply = function (nm1, nm2) {
    return nm1 * nm2;
};
console.log(multiply(2, 3));
//n number of anonymous function
var myaray = [];
for (var i = 0; i < 10; i++) {
    myaray.push(function () { return i; }); // push elemenys to array
}
//to display
for (var i = 0; i < 10; i++) {
    console.log(myaray[i]());
}
