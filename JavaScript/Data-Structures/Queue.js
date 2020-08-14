const List = require('./LinkedList');

class Queue {
    constructor(limit=1000){
        this._list = new List();
        this._limit = limit;
    }
    
    getLength() {
        return this._list.getLength();
    }
    
    push(data){
        if (this.getLength() === this._limit) {return console.log("Error: Queue full")};
        
        this._list.push(data);
    }
    
    pop(){
        return this._list.pop();
    }
    
    getArray(){
        return this._list.returnListArray();
    }
    
}