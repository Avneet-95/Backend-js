console.log(Number("23"));
console.log(Number("abcd"));

let x=NaN;

console.log(x==NaN);// u cant check is NaN or Not with this

console.log(isNaN(x));// by this isNaN we can check


// isNaN first call toNumber

console.log(isNaN("Avneet")); //it gives true 
// isNaN converts the incoming input to  a Number so Avneet -> NaN -> thats why it gives true
console.log(Number.isNaN("Avneet"));// solution to above problem 

//one more way 
if (typeof (x) == "number" && x !== x) {
    console.log(true);
} else {
    console.log(false);
}


// OR

console.log(x !== x);




