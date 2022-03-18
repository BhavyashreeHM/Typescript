//arrow function
var helo=():string=>{
    return "Hello"
}
console.log(helo())
//normal function
function hllo():string{
    return "Hello"

}
console.log(hllo())

//passing arguemwnts

var hey=(name:string):string=>{
    return "Hey"+name
}
console.log(hey("BHavya"))

//
var multiply =(nm1:number,nm2:number)=>{
    return nm1*nm2
}
console.log(multiply(2,3))

//n number of anonymous function
var myaray:Array<any>=[]

for (var i=0;i<10;i++){
    myaray.push(():number=>{return i})// push elemenys to array
}
//to display
for (var i=0;i<10;i++){
    console.log(myaray[i]())
}