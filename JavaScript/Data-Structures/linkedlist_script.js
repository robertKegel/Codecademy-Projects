

const LinkedList = require('./LinkedList.js');

const testList = new LinkedList();

console.log('is list empty: ' + testList.isEmpty());

console.log('adding first node...');

testList.push('first');

console.log('is list empty: ' + testList.isEmpty());

console.log('adding second node...');

testList.push('second');

console.log('list length: ' + testList.length);

let testNode = testList.pop();

console.log(testNode.data);