let x= -0;
console.log(x===0);//true

console.log(Object.is(x,-0));//true
console.log(Object.is(x,0));//false


console.log(Math.sign(-3));//-1
console.log(Math.sign(2));//1
console.log(Math.sign(-0));//-0
console.log(Math.sign(0));//+0



//custom function 

let num = -0;

if (Math.sign(num) === -1 || Math.sign(num) === -0) {
    console.log("Negative hai");
} else {
    console.log("Positive hai")
}