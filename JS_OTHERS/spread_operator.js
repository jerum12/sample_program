const fruits_1 = ['apple', 'orange', 'mango']; //na read from json.data(men)
const fruits_2 = ['dalandan', 'lanzones', 'banana']; // na read from json.data(women)
const fruits = [...fruits_1, ...fruits_2];

const fruit_3 = [...fruits_2];
console.log(fruit_3);

console.log(fruits);

const obj1 = { name: 'Fruits', price: '123' };
const obj2 = { location: 'QC', details: 'Hello' };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

//category = for women
//category = for men
// category = for all

//const  category_women =
