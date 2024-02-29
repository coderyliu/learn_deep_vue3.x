const arr = [1, 2, 1, 2];
const set = new Set(arr);
console.log(set);
console.log(set.size);
// console.log(set)
console.log([...set]);

function foo() {
  console.log(arguments);
  console.log([...arguments]);
}
foo(1, 2, 3, 4, 5, 6);
