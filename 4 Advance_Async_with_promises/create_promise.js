function getRandom(max){
    return Math.floor(Math.random()*max);

}

function createPromiseWithLoop(){
    return new Promise(function executor(resolve,reject){
        for(let i=0;i<10000000;i++){
            let num=getRandom(10);
            if(num%2==0){
                //if random no is even we fulfill
               resolve(num);
            }
            else {
                //if random no is odd we reject
                reject(num);

            }
        }
    })
}
function createPromiseWithRuntime(){
    return new Promise(function executor (resolve,reject){
        setTimeout (function (){
            let num=getRandom(10);
            if(num%2==0){
                //if random no is even we fulfill
               resolve(num);
            }
            else {
                //if random no is odd we reject
                reject(num);

            }
        },1000);
    });
}
// let x=createPromiseWithLoop();
let y=createPromiseWithRuntime();
console.log(y);

//at the timewhen constructor generated a new promise object it also generate a pair of func called resolve and reject 

// generally the constructor callback was some async/sync operation 

// the executor is called sync 