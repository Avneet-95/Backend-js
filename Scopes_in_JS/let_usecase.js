// var allows you redeclaration and let does not allows 
let a = 10;
// let a = 11;  // Error

var b = 10;
var b = 11;  // re-declaration 


//var not preferable
function fun(){
    for(var i=0;i<10;i++){

    }
    console.log(i);// var can be accessed outside for loop
}
fun();

//let 
function process(x,y){
    if(x>y){
        let temp=x;
        x=y;
        y=temp;
    }
    return y-x;
}
process();




