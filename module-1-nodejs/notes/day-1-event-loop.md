# Day 1 Learnings

- Synchronous code runs first.
- Promise callbacks run before timer callbacks.
- Timers do not interrupt running code.
- Microtasks are processed before timers.
- Blocking operations can freeze the event loop.
- Node.js executes JavaScript on a single main thread.