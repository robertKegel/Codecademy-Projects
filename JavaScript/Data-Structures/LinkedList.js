class ListNode {
    constructor(data, next=null){
        this._data = data;
        this._next = next;
    }
    
    get data(){
        return this._data;
    }
    
    get next(){
        return this._next;
    }
    
    set data(data) {
        this._data = data;
    }
    
    set next(node) {
        this._next = node;
    }
    
}

class LinkedList {
    constructor(){
        this._head = null;
        this._length = 0;
    }
    
    get length(){
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
            newNode.next = current;
            this._head = newNode;
            this._length += 1;
            return this;
        }
    }
    
    pop(){
        let current = this._head;
        let previous = null;
        while (current.next){
            previous = current;
            current = current.next;
        }
        previous.next(null);
        this._length -= 1;
        return current;
    }
}

module.exports = LinkedList;