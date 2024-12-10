class ArrayList {
    constructor() {
      this.items = new Array(100);
      this.size = 0;
    }
    get(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('bad index');
      }
      return this.items[index];
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
} holboos daraalal jigsaalt bodooroi