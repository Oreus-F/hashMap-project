import { HashMap } from "./hashmap.js";
import { HashSet } from "./hashSet.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('dog', 'black');

test.set('moon', 'silver');
console.log(test.entries());
console.log(test.length());

const retest = new HashSet();

retest.set('dog');
retest.set('cat');
retest.set('bird');
retest.set('crocodile');
retest.set('platypus');

console.log(retest.length());
console.log(retest.get('dog'));
console.log(retest.has('platypus'));
console.log(retest.remove('crocodile'));
console.log(retest.length());
console.log(retest.keys());
console.log(retest.clear());
console.log(retest.length())