const ListNode = require('./ListNode');

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
        if (this.isEmpty()) {
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
        while (current.getNext()){
            previous = current;
            current = current.getNext();
        }
        previous.setNext(null);
        this._length -= 1;
        return current;
    }
    
    returnListArray() {
        let array = [];
        let current = this._head;
        
        while(current){
            array.push(current.getData());
            current = current.getNext();
        }
        
        return array;
    }
    
    
}

module.exports = LinkedList;