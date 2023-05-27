var teacher ="sanket";// teacher ->global->sanket
function ask(question){//ask ->global ,questin ->ask
    console.log(teacher,question);// sanket why?
}

function fun(){  //fun->global
    var teacher="pulkit";//teacher->fun->pulkit
    ask("why?");
}
fun();