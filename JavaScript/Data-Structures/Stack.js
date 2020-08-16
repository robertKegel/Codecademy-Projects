const ListNode = require('./ListNode');

class Stack {

    constructor(limit=1000){
        this._limit = limit;
        this._length = 0
        this._head = null;
    }

    isEmpty(){
        return this._length === 0;
    }

    push(data){

        try {
            if (this._length === this._limit){
                throw Error('Stack limit reached!');
            }
        } catch (e){
            console.log(e);
            return this;
        }

        let newNode = new ListNode(data);

        if (this.isEmpty()){
            this._head = newNode;
            this._length += 1;
            return this;
        } else {
            newNode.setNext(this._head);
            this._head = newNode;
            this._length += 1;
            return this;
        }
    }
    
    pop(){
        
        try {
            if (this.isEmpty()){
                throw Error('Stack Empty');
            }
        } catch (e){
            console.log(e);
            return;
        }
        
        if (this._length === 1){
            let oldHead = this._head;
            this._head = null;
            this._length = 0;
            return oldHead.getData();
        } else {
            let oldHead = this._head;
            let newHead = oldHead.getNext();
            this._head = newHead;
            this._length -= 1;
            return oldHead.getData();
        }
    }
    
    peek(){
        
        try {
            if (this.isEmpty()){
                throw Error('Stack Empty');
            }
        } catch (e){
            console.log(e);
            return
        }
        
        return this._head.getData();
    }
}

module.exports = Stack;