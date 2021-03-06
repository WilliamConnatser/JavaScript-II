// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function lambdaSlack() {
  const message = "New announcement! We are making an announcement to announce an announcement!";
  console.log(message)
  function web18() {
    const web18message = `Did ya'll see that new announcement: ${message}`;
    console.log(web18message);
  }
  web18();
}
lambdaSlack();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 1;
  // Return a function that when invoked increments and returns a counter variable.
  return () => counter++;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 1;

  return {
    increment: () => counter++,
    decrement: () => counter--
  }
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
