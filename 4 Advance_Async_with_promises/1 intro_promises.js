//promises 

//promises are readablility enhancers

//they can solve the problem of inversion of control

// in js promises are special type of object that return immediately when we call them 

//recap of inversion of control

// code:
/*
function fun (x,cb){
    for(let i=0;i<x;i++){
        cb();
    }
}

fun (10,function exec(){
    console.log("done");
})

you are giving control of exec function to someone else 

*/


//promises act as a placeholder for the data we hope to get back some time later 
// for ex x=fetch("https://www.xyz.com") then promises hel to return using promises
// then it will immediately return promise obj whuch act as a placeholder 

// in these promise object we can attach the functionality which we want to execute once the future task is done 
//once the future tas is done promises will automatically start executing 


// 1) how we can create a promise 
// 2) how can we consume the promise 


//promises are native to js
//so creation of promise object is sync in nature 
  










