export function createCircularQueue(capacity) {
  const queue = new Array(capacity).fill(null);
  let front = -1;
  let rear = -1;

  function isFull() {
    return (rear + 1) % capacity === front;
  }

  function isEmpty() {
    return front === -1;
  }

  function enqueue(item) {
    if (isFull()) {
      console.log("Queue is full");
    } else if (isEmpty()) {
      front = rear = 0;
      queue[rear] = item;
    } else {
      rear = (rear + 1) % capacity;
      queue[rear] = item;
    }
  }

  function dequeue() {
    if (isEmpty()) {
      console.log("Queue is empty");
    } else if (front === rear) {
      let item = queue[front];
      front = rear = -1;
      return item;
    } else {
      let item = queue[front];
      front = (front + 1) % capacity;
      return item;
    }
  }

  function display() {
    if (isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i = front;
      while (i !== rear) {
        console.log(queue[i]);
        i = (i + 1) % capacity;
      }
      console.log(queue[rear]);
    }
  }

  return { enqueue, dequeue, display };
}
