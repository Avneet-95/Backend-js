{
    var x=4;
}
console.log(x);

// function func(){
//     let y=10;
// }
// console.log(y); throws error because of functiom scope 

// function scope 

function fun() {
    console.log(c);  // undefined, c is accessible before initialization
    var c = 10;
}

fun();

// console.log(c);  // Error as c is only accessible inside function


function fun2() {
    console.log(d);  // d is not accessible before initialization
    let d = 10;
}

// fun2();

// console.log(d);  // Error as d is only accessible inside function

// block scope 

// {
//     let x=10;
// }
// console.log(x);// throws error