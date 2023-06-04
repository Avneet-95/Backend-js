// JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode"
"use strict";

console.log(teacher);// undefined
var teacher="Avneet";
function func(){
    var teacher ="Sanket";
    content="24";
    console.log(teacher);//sanket
}
function gun(){
    var student="sanket";
    console.log(student)
}
// console.log(content); autoglobal
func();
gun();
console.log(content);// Error, as strict mode will restrict auto-globals creation

//strict mode make autoglobal disable 

// strict mode in block will allow function to have scope only inside block not global scope