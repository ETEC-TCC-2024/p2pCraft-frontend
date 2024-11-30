export class LinkedListNode<T> {
  private data: T;
  private next?: LinkedListNode<T>;
  private prev?: LinkedListNode<T>;

  constructor(data: T) {
    this.data = data;
  }

  public getData(): T {
    return this.data;
  }
  public setData(value: T) {
    this.data = value;
  }

  public getNext(): LinkedListNode<T> | undefined {
    return this.next;
  }
  public setNext(value: LinkedListNode<T> | undefined) {
    this.next = value;
  }

  public getPrev(): LinkedListNode<T> | undefined {
    return this.prev;
  }

  public setPrev(value: LinkedListNode<T> | undefined) {
    this.prev = value;
  }
}

export class CircularLinkedList<T> {
  firstNode?: LinkedListNode<T>;

  constructor() {}

  /**
   * Appends data into last node
   * @param data
   */
  public add(data: T) {
    if (!this.firstNode) {
      this.firstNode = new LinkedListNode(data);
      this.firstNode.setNext(this.firstNode);
      this.firstNode.setPrev(this.firstNode);
    } else {
      const lastNode = this.firstNode.getPrev()!;
      const newNode = new LinkedListNode(data);

      lastNode.setNext(newNode);
      this.firstNode.setPrev(newNode);

      newNode.setNext(this.firstNode);
      newNode.setPrev(lastNode);
    }
  }
}
