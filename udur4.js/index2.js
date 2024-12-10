class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    } 

    get(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('bad index');
      }
      //TODO 
    }

    insert(index, item) {
      // TODO
    }

    delete(index) {
      // TODO
    }
    getSize() {
      return this.size;
    }
}