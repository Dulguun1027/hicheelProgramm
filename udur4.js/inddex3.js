class LinkedList {
    
    insert(index, item) {
      if(index < 0 || index >= this.size) {
        throw new Error('bad index');
      }
      if(this.head === null) {
        this.head = item;

        return; 
    }
      let current = this.head
      let i = 1;
      while(i < index) {
        current = current.next;
        i++; 
    }
      item.next = current.next;
      current.next = item;
    }
    
}