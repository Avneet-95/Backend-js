//inversion of control 
//callback hell-readability problem

let arr=[1,10,100,9,2,3,11];

arr.sort(function cmp(a,b){
    return a-b;
})
console.log(arr);

function doTask(fn,x){

    //whole implementation is done by team A 
    fn(x*x);// calling my callback with square of x
};//team A

//here team b tries to use it
doTask(function (num){//due to callback I am passing the control to doTask
console.log("woah num is", num);
},9)

 
