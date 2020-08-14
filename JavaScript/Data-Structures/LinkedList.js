class ListNode {
    constructor(data, next=null){
        this._data = data;
        this._next = next;
    }
    
    getData(){
        return this._data;
    }
    
    getNext(){
        return this._next;
    }
    
    setData(data) {
        this._data = data;
    }
    
    setNext(node) {
        this._next = node;
    }
    
}

class LinkedList {
    constructor(){
        this._head = null;
        this._length = 0;
    }
    
    getLength(){
        return this._length;
    }
    
    isEmpty() {
        return this._length === 0;
    }
    
    push(data) {
        let newNode = new ListNode(data);
        if (this._head === null) {
            this._head = newNode;
            this._length += 1;
            return this;
        } else {
            let current = this._head;
            newNode.setNext(current);
            this._head = newNode;
            this._length += 1;
            return this;
        }
    }
    
    pop(){
        let current = this._head;
        let previous = null;
        while (current.getNext){
            previous = current;
            current = current.getNext;
        }
        previous.setNext(null);
        this._length -= 1;
        return current;
    }
}

module.exports = LinkedList;