console.log("hello")

for(let i=0;i<3;i++){
setTimeout(function exec(){
    console.log("in middle");
},0);
}
for(let i=0;i<1000000000;i++){
    //any code
}
console.log("end");


//hello
//end 
//3*in middle