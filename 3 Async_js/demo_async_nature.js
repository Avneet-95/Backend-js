function timeConsumedByloop(){
    console.log("enters in function 1");

    for(let i=0;i<10000000;i++){

    }
    console.log("left function 1");
}

function timeConsumedByRuntime(){
    console.log("enter func 2");

    setTimeout(
        function exec(){
            console.log("left func 2");

        }
        , 5000
    )
}

console.log("start");
timeConsumedByloop();
timeConsumedByRuntime();
timeConsumedByloop();
console.log("end");


//output 
/*start
  enter in func 1
  left func 1
  enter func 2
  enter in func 1
  left func 1
  end 
  left func 2


    
  */