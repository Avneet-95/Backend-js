function fun(){//function declaration 

};
let f=function gun(){// function expression 

};
let a= function (){//function expression 

};

// below code is not IIFE because we are not invoking it 
(
    function x(){//function expression 

    }
)

(
    function(){//function expression 

    }
)
let y=()=>{//function expression 

}


let x=function(){
    console.log("hi");
}
console.log(x);
x();


