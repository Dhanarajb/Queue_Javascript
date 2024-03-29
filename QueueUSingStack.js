export function QueueUsingStacks() {
  const stack1 = [];
  const stack2 = [];

  function enqueue(element) {
    stack1.push(element);
  }

  function dequeue() {
    if (isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    if (stack2.length === 0) {
      while (stack1.length > 0) {
        stack2.push(stack1.pop());
      }
    }

    return stack2.pop();
  }

  function isEmpty() {
    return stack1.length === 0 && stack2.length === 0;
  }

  return { enqueue, dequeue, isEmpty };
}
