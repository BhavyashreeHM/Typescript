function hello(name) {
    return "Hello" + name;
}
console.log(hello("Bhavya"));
function add(num1, num2) {
    return num1 + num2;
}
console.log("sum is:" + add(10, 20));
//functional parameter
function calculator(fun) {
    console.log(fun(100, 200));
}
calculator(add);
/*function display(id:number,name:string,role:string="Normal user"){
    console.log("id",id)
    console.log("name",name)
   // if(role=undefined){

        console.log("role",role)
    //}
    
   
}
//display(1,"Bhavya","engineer")
//display(2,"archu")*/
/*returning a function

function calci():any{
    function subtract(n1:number,n2:number):number{
        return n1-n2;
        
    }
    return subtract;
}
//var sub = calci()
console.log(calci().subtract(20,10))
*/
//anonous fuction
var hii = function (name) {
    return "Hii" + name;
};
console.log(hii("Bhavyashree"));
