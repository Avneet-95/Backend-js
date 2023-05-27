//const declaration creates a block scope and it cant be reassigned

// however constant in an object or array its properties or items can be updated 
// console.log(x); error, TDZ because temporal dead zone it gives error
const x=10;
// x=00; throws error due to reassignment 

const obj={x:10};
obj.x=9;// its fine 

console.log(obj);
