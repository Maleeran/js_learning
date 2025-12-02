class MyArrayList {
  constructor(initCapacity) {
    this.data = [];
    this.size = 0;
    this.INIT_CAP = 1;

    this.init(initCapacity);
  }

  init(initCapacity) {
    const capacity = initCapacity || this.INIT_CAP;
    this.data = new Array(capacity);
    this.size = 0;
  }

  addLast(e) {
    const cap = this.data.length;
    if (this.size == cap) {
      this.resize(2 * cap);
    }
    this.data[this.size] = e;
    this.size++;
  }

  add(index, e) {
    this.checkPositionIndex(index);

    const cap = this.data.length;
    if (this.size === cap) {
      this.resize(2 * cap);
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[index] = e;

    this.size++;
  }

  addFirst(e) {
    this.add(0, e);
  }

  removeLast() {
    if (this.size === 0) {
      throw new Error("NoSuchElementException");
    }
    const cap = this.data.length;

    if (this.size === Math.floor(cap / 4)) {
      this.resize(Math.floor(cap / 2));
    }

    const deletedVal = this.data[this.size - 1];

    this.data[this.size - 1] = null;
    this.size--;

    return deletedVal;
  }

  remove(index) {
    this.checkElementIndex(index);

    const cap = this.data.length;
    if (this.size === Math.floor(cap / 4)) {
      this.resize(Math.floor(cap / 2));
    }

    const deletedVal = this.data[index];

    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[1];
    }

    this.data[this.size - 1] = null;
    this.size--;

    return deletedVal;
  }

  removeFirst() {
    return this.remove(0);
  }

  get(index) {
    this.checkElementIndex(index);

    return this.data[index];
  }

  set(index, element) {
    this.checkElementIndex(index);

    const oldval = this.data[index];
    this.data[index] = element;
    return oldval;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  // 将 data 的容量改为 newCap
  resize(newCap) {
    const temp = new Array(newCap);

    for (let i = 0; i < this.size; i++) {
      temp[i] = this.data[i];
    }

    this.data = temp;
  }

  isElemenIndex(index) {
    return index >= 0 && index < this.size;
  }

  isPositionIndex(index) {
    return index >= 0 && index <= this.size;
  }

  checkElementIndex(index) {
    if (!this.isElemenIndex(index)) {
      throw new Error("Index: " + index + ", Size: " + this.size);
    }
  }

  checkPositionIndex(index) {
    if (!this.isElemenIndex(index)) {
      throw new Error("Index: " + index + ", Size: " + this.size);
    }
  }

  display() {
    console.log("size = " + this.size + " cap = " + this.data.length);
    console.log(this.data);
  }
}

// 初始容量设置为 3
const arr = new MyArrayList(3);

// 添加 5 个元素
for (let i = 1; i <= 5; i++) {
  arr.addLast(i);
}

arr.remove(3);
arr.add(1, 9);
arr.addFirst(100);
const val = arr.removeLast();

// 100 1 9 2 3
for (let i = 0; i < arr.getSize(); i++) {
  console.log(arr.get(i));
}
