// {
//     function func(){
//         return "123";
//     }
// }
// console.log(func);//[Function: func]


// with strict mode
"use strict"
{
    function func(){
        return "123";
    }
    console.log(func);
}

// console.log(func); throws error in strict mode