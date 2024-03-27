import { Queue } from "./Implement.js";

// Create a new queue instance
const myQueue = Queue();

// Enqueue elements into the queue
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

// Print the current state of the queue
console.log("Queue:", myQueue.printQueue()); // Output: Queue: 10 20 30

// Peek at the front element of the queue
console.log("Front element:", myQueue.peek()); // Output: Front element: 10

// Dequeue an element from the queue
console.log("Dequeue:", myQueue.dequeue()); // Output: Dequeue: 10

// Print the state of the queue after dequeuing
console.log("Queue after dequeue:", myQueue.printQueue()); // Output: Queue after dequeue: 20 30
// ---------------implement Queue------------------
// ---------------implement stack------------------
// ---------------implement stack------------------
// ---------------implement stack------------------
// ---------------implement stack------------------
// ---------------implement stack------------------
// ---------------implement stack------------------
