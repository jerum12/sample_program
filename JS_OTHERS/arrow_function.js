//Regular Function

function add(a, b) {
  return a + b;
}

//ARROW FUNCTION
const add2 = (a, b) => a + b;

function Person(name) {
  this.name = name;
}

const p = new Person('Alicia');
console.log(p);

// const personArrow = (name) => {
//   this.name = name;
// };

// const p2 = new personArrow('Alicia');
// console.log(p2);
