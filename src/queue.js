class Queue {
    values = [];

    enqueue(value) {
        this.values.push(value);

        return this;
    }

    // Removes an element from the head of the queue
    dequeue() {
      return this.values.shift();
    }

    // Returns the first item of the queue
    head() {
      return this.values[0];
    }

    // Returns the last item of the queue
    tail() {
      return this.values[this.values.length - 1];
    }

    // Returns the length of the Stack
    size() {
        return this.values.length;
    }

    // Returns true if the Stack is empty, false otherwise
    isEmpty() {
        return this.values.length <= 0;
    }
}

module.exports = Queue;