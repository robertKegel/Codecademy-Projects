

const LinkedList = require('./LinkedList');

const testList = new LinkedList();

console.log('is list empty: ' + testList.isEmpty());

console.log('adding first node...');

testList.push('first');

console.log('is list empty: ' + testList.isEmpty());

console.log('adding second node...');

testList.push('second');

console.log('list length: ' + testList.getLength());

console.log('adding third node...');

testList.push('third');

console.log('return list data as an array: ');

console.log(testList.returnListArray());

