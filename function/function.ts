function hello(name:string):string{
    return "Hello"+name;

}

console.log(hello("Bhavya"))

function add(num1:number,num2:number):number{
    return num1+num2
}
console.log("sum is:"+add(10,20))


//functional parameter
function calculator(fun:any):void{
    console.log(fun(100,200))

}
calculator(add)


/*default value as parameter*/
function display(id:number,name:string,role:string="Normal user"){
    console.log("id",id)
    console.log("name",name)
   // if(role=undefined){

        console.log("role",role)
    //}
    
   
}
display(1,"Bhavya","engineer")
display(2,"archu")



// function as parameter

function calci():any{
    function subtract(n1:number,n2:number):number{
        return n1-n2;
        
    }
    return subtract;
}
//var sub = calci()
console.log(calci().subtract(20,10))



//anonous fuction
var hii= function(name:string):string{
    return "Hii"+name;
}
console.log(hii("Bhavyashree"))