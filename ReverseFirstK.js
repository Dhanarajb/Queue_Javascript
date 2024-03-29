export function reverseFirstK(queue, k) {
  if (k <= 0 || k > queue.length) {
    console.log("Invalid value of k");
    return;
  }

  const stack = [];

  // Step 1: Dequeue the first K elements and store them in a stack
  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }

  // Step 2: Pop elements from the stack and enqueue them back into the queue
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  // Step 3: Dequeue and enqueue the remaining elements from the queue

  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift());
  }
}

// Example usage:
