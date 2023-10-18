let grades = [];

// set ng value / mag add / initiliaze ng value sa array
grades[0] = 90;
grades[1] = 85;
grades[2] = 100;

//console.log(grades);

//grades.push();

// for (let i = 0; i < grades.length; i=i+2) {
//   console.log(i + '->', grades[i]);
// }

// for (let i in grades) {
//   console.log(i + '->', grades[i]);
// }

//console.log(grades.join(' _   '));

const boys = ['Girl_Joey', 'Girl_Kat', 'Boy_Lem'];

// boys.push('Z');
// boys.push('X');

// console.log(boys.sort(descending));

// function descending(a, b) {
//   console.log(a, b);
//   return a > b ? -1 : 1;
// }

// console.log(boys);

// if(boys.indexOf('Girls')){
//     let f_idx = boys.indexOf('Girl');
//     boys.splice(f_idx, 1);
// }

// const letters = ['B', 'Z', 'Y', 'A', 'E', 'F', 'G'];

// const ret = delete letters[2];

// console.log(letters);

// for (let i in letters) {
//   console.log(letters[i]);
// }

const number = [29, 1, 111, 100, 85, 135];

const res = number.every(checkAge);
//const res = boys.every(checkIfHasGirls);
//console.log('---->', res);

function checkAge(a) {
  if (a > 18) {
    return true;
  } else return a;
}

function checkIfHasGirls(b) {
  return b.indexOf('Girl') > -1;
}

var new_number = [];

for (var i = 0; i < number.length; i++) {
  if (number[i] < 18) new_number.push(number[i]);
}

//console.log('---->ito ung mga nag false', new_number);

const array_cart = [
  { item: 'Ring', quantity: 1 },
  { item: 'Necklace', quantity: 0 },
  { item: 'Bracelet', quantity: 10 },
];

const res2 = array_cart.every(checkIfhasStock);

function checkIfhasStock(obj) {
  return obj.quantity > 0;
}
//console.log('---->ito ung cart mo if may stock pa', res2);

//const ret3 = array_cart.forEach(loopUsingForEach);

function loopUsingForEach(a) {
  console.log(a);
  return a;
}

const ret3 = array_cart
  .map((a) => a.quantity + 10)
  .sort(checkIfhasStock)
  .concat(checkIfhasStock);

//console.log('---->ret3', ret3);

const array_students = [
  { name: 'Melvin', gender: 'Male', section: 'Section 1', grade: '90' },
  { name: 'Joey', gender: 'Female', section: 'Section 2', grade: '91' },
  { name: 'Edgar', gender: 'Male', section: 'Section 3', grade: '92' },
  { name: 'Jasmin', gender: 'Female', section: 'Section 4', grade: '91' },
];

const result_map = array_students
  .map((a) => {
    //console.log('Student', a.name, ' , ', a.gender);
    if (a.name === 'Melvin') {
      a.section = 'Section 3';
    }
    return a;
  })
  .join('->');

//console.log('result_map_outpu->', result_map);
let b = '';

let s = ['Elen', 'Sam', 'Piolo', 'Dingdong', 'Pia', 'Barbie', 'Jessie', 'Luis', 'Robi', 'Marian'];

s.forEach(function (a) {
  console.log(a);
});

s.splice(8, 1);
console.log(s);

console.log(s.indexOf('Pia'));

s.push('Kodego');

const new_s = s.filter(function (s) {
  return ['Elen', 'Sam', 'Pia', 'Barbie', 'Jessie', 'Marian'].includes(s);
});
console.log(new_s);

const girlNames = [];
s.forEach(function (name) {
  if (
    name === 'Elen' ||
    name === 'Sam' ||
    name === 'Pia' ||
    name === 'Barbie' ||
    name === 'Jessie' ||
    name === 'Marian'
  ) {
    girlNames.push(name);
  }
});
console.log(girlNames);

const new_array = new Array();
const string = new String();
const num = new Number();

let envelope = 'hi';

envelope = 'Hello';

let arry = { name: 'John', age: 12 };
arry.age = 13;
