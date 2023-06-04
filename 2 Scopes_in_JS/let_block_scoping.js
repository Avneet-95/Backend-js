var teacher="sanket";
function func(){
    console.log(teacher);//undefined  !!!!!IMPORTANT CONCEPT
    // console.log(content);
    // TDZ-temporal dead zone the region before the declaration of variable which is having a block scope made by let is known as TDZ
    var teacher="pulkit";
    let content="JS";
    if(content=="JS"){
        let hrs="120+";
        console.log(hrs);//120+
    }
    console.log(teacher,content);//pulkit JS
}
func();
console.log(teacher);//sanket
// console.log(content);// error