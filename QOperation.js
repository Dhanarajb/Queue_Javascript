export function operationQueue(capacity) {
  const queue = new Array(capacity);
  let front = 0;
  let rear = -1;
  let count = 0;

  function isFull() {
    return count === capacity;
  }

  function isEmpty() {
    return count === 0;
  }

  function enQueue(item) {
    if (isFull()) {
      console.log("Queue is full");
      return;
    }
    rear = (rear + 1) % capacity;
    queue[rear] = item;
    count++;
  }

  function deQueue() {
    if (isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    const item = queue[front];
    front = (front + 1) % capacity;
    count--;
    return item;
  }

  function getFront() {
    if (isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return queue[front];
  }

  function getRear() {
    if (isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return queue[rear];
  }

  return { enQueue, deQueue, getFront, getRear, isEmpty, isFull };
}
