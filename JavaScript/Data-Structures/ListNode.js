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

module.exports = ListNode;