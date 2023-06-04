// IIFE - immediately invoked function expression
(function x(){
    console.log("hi");
})();
//the movement we define it we invoke it 


// use case 

function f(){
    return 1;

}
function g(){
    return 2;
}
var i=10;
var res;
if(i%2==0){
    res= f();
}
else res=g();

console.log(res);


//this code using iife
var res2=(function evaluate(){
    if(i%2==0) return f();
    else return g();
})();
console.log(res2);