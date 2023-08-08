//p.then(fullfillmentHandler,rejectionHandler);

function getRandomInt(max){
    return Math.ceil(Math.random()*max);

}


function createPromiseWithRuntime(){
    return new Promise(function executor(resolve,reject){
        console.log("entering the executor callback in the promise constructor");
        setTimeout(function(){
            let num =getRandomInt(10);
            if(num%2==0){
                resolve(num);
            }
            else{
                reject(num);
            }
        },1000);
        console.log("executing the executor callback in the promise constructor");
    });

}

console.log("starting");
const p=createPromiseWithRuntime();

console.log("we are now waiting promise to complete");
console.log("currently my promise object is like ..... ",p);

p.then(
    function fullfillmentHandler(value){
       console.log("insisde fullfilment handler",value );
       console.log("promise after fullfilment handler",p );
    },
    function rejectionHandler(value){
        console.log("inside rejection handler",value);
        console.log("promise after rejection handler",p);

    }
);



