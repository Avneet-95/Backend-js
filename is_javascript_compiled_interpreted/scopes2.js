
console.log(teacher);// undefined
var teacher="Avneet";
function func(){
    var teacher ="Sanket";
    content="24";
    console.log(teacher);//sanket
}
function gun(){
    var student="sanket";
    console.log(student)
}
// console.log(content); autoglobal
func();
gun();
console.log(content);