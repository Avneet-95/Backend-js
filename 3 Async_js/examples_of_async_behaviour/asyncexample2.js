console.log("hello")
setTimeout(function exec(){
    console.log("in middle");
},0);

for(let i=0;i<1000000000;i++){
    //any code
}
console.log("end");


//hello
//end
//in middle