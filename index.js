import { createCircularQueue } from "./Circular.js";
import { Queue } from "./Implement.js";
import { operationQueue } from "./QOperation.js";
import { QueueUsingStacks } from "./QueueUSingStack.js";
import { reverseFirstK } from "./ReverseFirstK.js";

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
// ---------------circular Queue------------------
// Example usage:
const cq = createCircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
cq.display(); // Output: 1 2 3 4 5
cq.dequeue();
cq.dequeue();
cq.display(); // Output: 3 4 5
cq.enqueue(6);
cq.enqueue(7);
cq.display(); // Output: 3 4 5 6 7
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.dequeue(); // Output: Queue is empty

// ---------------Operations Queue------------------
const opQue = operationQueue(5);
opQue.enQueue(1);
opQue.enQueue(2);
opQue.enQueue(3);
opQue.enQueue(4);
opQue.enQueue(5);

console.log("Front element:", opQue.getFront()); // Output: 1
console.log("Rear element:", opQue.getRear()); // Output: 5

opQue.deQueue();
opQue.deQueue();

console.log("Front element:", opQue.getFront()); // Output: 3
console.log("Rear element:", opQue.getRear()); // Output: 5
// ---------------implement stack------------------
const queue = [1, 2, 3, 4, 5, 6, 7];
const k = 4;
console.log(queue.length - k, "queue.length - k");
reverseFirstK(queue, k);
console.log(queue); // Output: [4, 3, 2, 1, 5, 6, 7]
// -------------- QueueUsingStacks------------------
const queues = QueueUsingStacks();
queues.enqueue(1);
queues.enqueue(2);
queues.enqueue(3);

console.log(queues.dequeue()); // Output: 1
console.log(queues.dequeue()); // Output: 2
console.log(queues.dequeue()); // Output: 3
console.log(queues.dequeue()); // Output: Queue is empty
// ---------------implement stack------------------
// ---------------implement stack------------------
// ---------------implement stack------------------
