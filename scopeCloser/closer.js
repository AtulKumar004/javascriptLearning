// Definition:
// A closure is created when a function is defined within another function, allowing the inner function to access variables from the outer function even after the outer function has finished executing

// Limitation:

// Can lead to memory leaks if not handled carefully.
// Overusing closures might make code harder to understand.

// Advantages:

// Provides a way to create private variables.
// Enables the concept of partial application and function currying.


// Example 1: Closure for private variables

function counter() {
    let count = 0;
    return function(){
        count++;
        console.log("counter =>" , count)
    }
}
let increment = counter();
increment();
increment();
increment();
increment();

// private variables : A private variable is a variable that is not directly accessible from outside the scope in which it is declared. In JavaScript, the concept of closure is utilized to create private variables. In the case of the counter function, the inner function returned (function() { ... }) has access to the count variable due to closure, even though the outer function (counter) has finished executing.



// Example 2: Closure with parameters

function greet(prefix){

    return function(name){
        console.log(prefix + " " + name)

    }

}

let sayHello = greet("Hello");
sayHello("sandeep");
sayHello("anurag");
let Ms = greet("Ms.");
Ms("sandeep");
Ms("anurag");


// In summary, scope deals with where variables are accessible, while closures involve the ability of functions to remember the scope in which they were created. These concepts are fundamental to understanding JavaScript and can greatly influence how you structure your code.


// Example 3 : Combining Scope and Closure, This is also example of Variable Shadowing : 

function outerFunction(){
    var varA = "I am outside var";
    function innerFunction(){
        var varA = "I am inner var";
        console.log("varA => inside  " , varA);

    }

    console.log("varA => outside  " , varA);
    return  innerFunction;
}

const closerFunction = outerFunction();

closerFunction();


// Example 4 Closure with Asynchronous Operation:
function asyncFunction(start  , end){
    let count = start;

    let result = "I am not done yet !"
    setTimeout(() => {
        if(count === end) return;
       
        result = "i am done"
        count++;
        console.log("Result after 1s => ", count)
        asyncFunction(count , end);


    }, 1000)

    return function(){
        console.log("result =>" , result);

    }
}

const checkStatus= asyncFunction(0 , 10);
checkStatus();

// Example 4  Private Variables with Closure:


function secretKeeper(){
    let secret =  "Hidden massage";
    return {
        getSecretMessage: function(){
            console.log("secret ==>" , secret)
        },
        setSecretMessage: function(newMessage){
            secret = newMessage;

        }
    }
}

let keeper = secretKeeper();
keeper.getSecretMessage();
keeper.setSecretMessage("New Secret Message")
keeper.getSecretMessage();







