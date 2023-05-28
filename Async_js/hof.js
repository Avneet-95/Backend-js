//higher order functions -> there are functions which take another functions as arguments 

function f(x,fn){
  //x->number
//   fn->function 

console.log(x);
console.log(fn);
fn();
}
f(10,function exec(){
    console.log("I am expression passed to higher order function ")
})

let arr=[1,10,9,100,11,12,13,14,2,3];
arr.sort();// it sorts the given array{expectation}
//default implementation of arr.sort() is going to sort the array in lexicographical order

console.log(arr);




let ar=[1,10,9,100,11,12,13,14,2,3];

ar.sort(
    function (a,b){
        return a-b;// if a-b negative then a is placed before b 
    }
);
//sort is the higher order function which take some comparator function as argument 



console.log(ar);
