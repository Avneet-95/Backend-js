const f=function func(){
    console.log("how much fun ??");

}

f();
// fun(); we can not call fun() it is only scoped to f


function fun(fn){
    console.log("welcome to fun");
    fn();
}
fun (function asking(){
    console.log("so much fun");
    console.trace();// it helps in debugging using the call stack 
})