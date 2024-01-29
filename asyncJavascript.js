// Async/await , callback , promises

// callback :

// Definition: Callbacks are functions passed as arguments to other functions. They are commonly used in asynchronous operations to ensure that certain code executes after a specific task is completed.

let dataObj = [
  {
    name: "Atul kumar",
    age: 26,
    profession: "Software Engineer",
  },
  {
    name: "Sandeep kumar",
    age: 24,
    profession: "Software Engineer",
  },
];

function getData(data) {
  setTimeout(() => {
    let output = "";
    data.forEach((obj) => {
      output += `<li> ${obj?.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(data, callback) {
  setTimeout(() => {
    dataObj.push(data);
    callback(dataObj);
  }, 2000);
}

// createData(
//   { name: "Arjun", age: 24, profession: "Software Engineer" },
//   getData
// );

/* Disadvantages Callbacks: 

1. Callback Hell: When dealing with multiple nested callbacks (also known as callback hell or pyramid of doom), code readability can degrade
2. Error Handling: Error handling becomes challenging, as errors must be propagated through each callback.  

Use Cases:

Suitable for simple asynchronous operations.
When dealing with functions that require fine-grained control over execution flow.
*/

// =========================================== Promise ==================================\\\

/*

Definition: Promises are a more structured way to handle asynchronous operations. They represent a value that might be available now, or in the future, or never. Promises have states - pending, fulfilled, or rejected.

*/

let promiseData = [
  {
    name: "Ajay kumar",
    age: 26,
    profession: "Software Engineer",
  },
  {
    name: "kuldeep kumar",
    age: 24,
    profession: "Software Engineer",
  },
];

function createDataAsPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promiseData.push(data);
      let error = true;

      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

// createDataAsPromise({
//   name: "kamlesh",
//   age: 31,
//   profession: "Software Engineer III",
// })
//   .then(() => {
//     getData(promiseData);
//   })
//   .catch((err) => console.log("Kuch to kadbad hi daya: " ,  err));




//   ============================================ Async/Await ===============
/*
Definition: Async/Await is a syntactic sugar on top of Promises, making asynchronous code look more like synchronous code. It allows you to write asynchronous code that appears similar to synchronous code. */


async function fetchData(){
    try {
        const data = await  createDataAsPromise({
            name: "Mukesh",
            age: 31,
            profession: "Software Engineer III",
          });


         getData(promiseData);


        
    } catch (err) {
        console.log("Kuch to kadbad hi daya: " ,  err)
        
    }
}

fetchData();

// Disadvantages
// 1 . Requires Promise Support: Since Async/Await is built on top of Promises, it requires native Promise support.

// Use Cases:

// When dealing with complex asynchronous operations where readability is crucial.
// Situations where you need to wait for multiple asynchronous operations to complete.
