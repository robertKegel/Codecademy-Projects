const ListNode = require('./ListNode');

class DblLinkedNode extends ListNode{
    constructor(data, next=null, prev=null){
        super(data, next);
        this._prev = prev;
    }
    
    getPrev() {
        return this._prev;
    }
    
    setPrev(node){
        this._prev = node;
    }

}


module.exports = DblLinkedNode;
