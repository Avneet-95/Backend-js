// scopes is concept of visibility of variables and functions 

//Every thing inside code is used on of the following two ways 
//1 either it will be getting assighned to it
//2 or some value will be retrieved from it


// javascript is compiled or interpreted?
// compiled- compiler reads whole code in one go-- eg c/c++
// interpreted - reads code line by line --eg shellscript

// why below code showing error if it is interpreted atleast it should print 
// hello  - but its throwing error , so it is not purely interpreted
// console.log("hello");
// function func(){
//     console...log("hi");
// }
// func();



// js is also not purely compiled 
// console.log("hi")
// console.lo("hello")
// as above code is executing high but not hello


// js code execute in two phases 
// parsing 
// execution 



//global scope
//------------------
// var  - var variables are having function scope or global scope no block scope

console.log(teacher);// undefined
var teacher="Avneet";
function func(){
    var teacher ="Sanket";
    console.log(teacher);//sanket
}
function gun(){
    var student="sanket";
    console.log(student)
}
func();
//-------------------

// let - let gives you block scope


// types of scope
//1 global 
//2 function 
//3 block

