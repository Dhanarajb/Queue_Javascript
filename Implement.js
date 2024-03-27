// Define the Queue function
export function Queue() {
  // Initialize an empty array to hold the queue items
  const items = [];

  // Function to add elements to the queue
  function enqueue(element) {
    items.push(element);
  }

  // Function to remove elements from the queue
  function dequeue() {
    // Check if the queue is empty
    if (isEmpty()) {
      return "Underflow"; // If queue is empty, return "Underflow"
    }
    // Remove and return the first element from the queue
    return items.shift();
  }

  // Function to peek at the front element of the queue
  function peek() {
    // Check if the queue is empty
    if (isEmpty()) {
      return "Queue is empty";
    }
    // Return the first element of the queue without removing it
    return items[0];
  }

  // Function to check if the queue is empty
  function isEmpty() {
    return items.length === 0;
  }

  // Function to get the size of the queue
  function size() {
    return items.length;
  }

  // Function to print the elements of the queue
  function printQueue() {
    let str = "";
    // Iterate through the queue and concatenate its elements into a string
    for (let i = 0; i < items.length; i++) {
      str += items[i] + " ";
    }
    return str; // Return the concatenated string
  }

  // Return an object containing references to the queue functions
  return {
    enqueue,
    dequeue,
    peek,
    isEmpty,
    size,
    printQueue,
  };
}
