// Definition of Scope
// Scope refers to the context in which variables are declared and accessed. JavaScript has two main types of scope: global scope and local scope.
// Ex 

var globalVar = "I am global";

function exampleFunction(){
    var localVar = "I am local ";
    console.log("globalVar => " , globalVar)
    
    
}
// exampleFunction();
// console.log("localVar => " , localVar);
// console.log("globalVar => " , globalVar);
// Ex 2 Block Scope with let and const:
if(true){
    
    let blockVar=  "I am block Var";
    const  constVar=  "I am const Var";
    var ScopeVar = "I am var";
    if(true){

        console.log("blockVar =>", blockVar)  // accessible
    }
    // let and const can not access out of this block ; 
}
// console.log("blockVar =>", blockVar) // not accessible 

// where let and const can not access out of if block or (Block Scope ) but var can access , because Var has  function-level scope, which is disadvantages of var , because it may lead to unexpected behavior in certain situations.


console.log("ScopeVar =>", ScopeVar); // accessible

// Ex3 : Function Scope with var:
// if a var variable is declare  within a function then it can only access inside that function , not out of that function , it called , functional scope 

function functionalScope(){
    if(true) {
        var functionVar = "I am in a function";

    }
    console.log("functionVar =>", functionVar)
}
// console.log("functionVar => out", functionVar) // not accessible
functionalScope();








