console.log("hello")

for(let i=0;i<3;i++){
setTimeout(function exec(){
    console.log("in middle");
    setTimeout(function exec(){
        console.log("woah another one")
    },10);
},0);
}
for(let i=0;i<1000000000;i++){
    //any code
}
console.log("end");

//hello
//end
//in middle*3
//woah another one*3
