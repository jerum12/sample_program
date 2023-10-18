//object literal
const students = {
  name: 'Student 1',
  section: 'Section 1',
  grade: 90,
  honor_student: true,
  subjects: ['Math', 'English', 'Science', 'Filipino'],
  address: {
    permanent_address: 'QC',
    present_address: 'Bulacan',
    postal_code: '1234',
  },
  print: function () {
    console.log(`Hello students ${this.name}`, 'Hello students ' + this.name);
  },
};
console.log(students);
students.print();

// from backend
// students = []

// for (let asdasdasd in students) {
//   console.log(students[asdasdasd]);
// }
for (const [property, value] of Object.entries(students)) {
  console.log(property, value);
}

// for (let i of students) {
//   console.log(students[i]);
// }

// for (let i = 0; students.length; i++) {
//   console.log(students[i]);
// }
//access name ni student
//console.log(students.name);
//console.log(students['honor_student']);

//access postal_code address
//console.log(students.address.postal_code);

//access student subject english
//console.log(students.subjects[1]);

//ECMAScript6 Classes
// class Bike {
//   constructor(color, size) {
//     this.color = color;
//     this.size = size;
//   }

//   printBike() {
//     console.log(`Hello, your bike color is ${this.color} and size is ${this.size}`);
//   }

//   editBike() {
//     console.log(`Hello, your bike color is ${this.color} and size is ${this.size}`);
//   }

//   runBike() {
//     console.log(`Hello, your bike color is ${this.color} and size is ${this.size}`);
//   }
// }

// const bike_obj = new Bike('RED', 'LARGE');

// bike_obj.printBike();

// const bike_obj2 = new Bike('WHITE', 'small');
// bike_obj2.printBike();

// //Object.create

// var person = {
//   name: 'John',
// };

// var personObject = Object.create(person);

// //object constructor
// function PersonConstructor(name, age) {
//   this.name = name;
//   this.age = age;
//   this.print = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// const person_object = new PersonConstructor('Alice', 20);

let students_list = [
  {
    name: 'John',
    age: 21,
    address: {
      first_addres: {
        address_name: '',
      },
    },
  },
  { name: 'Lennon', age: 50 },
  { name: 'April', age: 15 },
];

for (let i = 0; i < students_list.length; i++) {
  let name = students_list[i].name;
  let age = students_list[i].age;

  console.log(`My name is:${name}, and my age is ${age}`);
}

// name, email, message

const array_contact_form = ['name', 'John', 'message', 'HELLO', 'email', 'a@a.com'];
const array_contact_obj = [
  {
    id: 1,
    name: 'John',
    message: 'Hello',
    email: 'a@a.com',
  },
  {
    id: 2,
    name: 'John',
    message: 'Hello',
    email: 'a@a.com',
  },
];

const obj = {
  name: 'John',
  message: 'Hello',
  email: 'a@a.com',
};

obj.contact_number = '1234567890';
