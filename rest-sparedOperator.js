// both rest and spread operator start with (...) but serve diffrent function.

// Rest operator

// *Definition*: The rest operator is used to represent an indefinite
//  number of arguments as an array. It is particularly 
//  useful in function parameters when you want to handle a variable number of arguments.

// Example.  A function which can have number of argument as props , function need to return 
// product of all numbers

function multiply(...other) {
    let num1 = 1;


    for(let i = 0; i < other.length ; i++ ){
        num1 = num1 * other[i];
    }
    

    console.log(num1);

}

multiply(1,2,5,4,6);
multiply(2,4);


let studentData = {
    name: "Atul",
    age: 26,
    profession : "Software Engineer"
}
const {...rest} =studentData;
console.log("Rest obj => " , rest)


// Spread Operator

// Definition: The spread operator is used to expand elements of an
//  iterable (like an array or a string) into individual elements. It is often used in function arguments or array literals to spread the elements.



function sum(a , b , c){
    console.log(a+ b +c);
}

let numbers = [5,6,7];
sum(...numbers)

let newStudent = {
    ...studentData,
    age: 27

}

console.log("Spared obj =>" , newStudent)



