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
    
<<<<<<< HEAD
}


module.exports = DblLinkedNode;
=======
}
>>>>>>> parent of d0df511... Update DblLinkedListNode
