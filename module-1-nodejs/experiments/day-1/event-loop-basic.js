/*
Output:
Start
End
Promise
Timeout

Reason:
Synchronous code runs first.
Promise callback enters microtask queue.
Timer callback executes later.
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");