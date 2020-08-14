

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
    
    set data(data){
        this._data = data;
    }
    
    set next(node){
        this._next = node;
    }
    
}

module.exports = ListNode;