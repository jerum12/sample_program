function generateReferenceNumber(number, name, isValid) {
  let rand = Math.random();
  console.log(`Generating reference from ${name}`);
  return rand + number;
}

function submitTicket() {
  //               //rand + 3;
  let ref_number = generateReferenceNumber(4, 'submit', true);

  console.log(ref_number);
}

function transactQue() {
  //
  let ref_number = generateReferenceNumber(3, 'transact', true);

  console.log(ref_number);
}

function Pumila() {
  //
  generateReferenceNumber(2, 'pumila', true);
}

function fileComplaint() {
  //
  generateReferenceNumber(1, 'file', true);
}

//gumagawa ng unique Reference Number

//transactQue();
//submitTicket();

function squareRoot(num) {
  return Math.sqrt(num);
}

let square = function (num) {
  return num * num;
};

//console.log(squareRoot(4));
//console.log(square(4));

let x = 10;
let y = 20;
let z = 30;

//console.log(x + z + y * z);

//let abc = abc + 1;
//abc++;

let xx = 5;
let yy = xx++;

console.log('XX ', xx);
console.log('YY ', yy);

let xxx = 11;
let yyy = ++xxx;

console.log('xxx ', xxx);
console.log('yyy ', yyy);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let abc = 10;
let xyz = 20;

///abc = abc + xyz;
//abc += xyz; // 30

//abc = abc - xyz;
//abc -= xyz;

//abc = abc * xyz
//abc *= xyz;

//abc = abc / xyz
abc /= xyz;

console.log('abc ', abc);

//abc = abc % xyz
//abc %= xyz;

let f = 5;
let g = '5';
let h = 5;
// != !==
//console.log(f !== g);

//console.log(f > h);

//console.log(f === h && typeof g !== 'string');

if (f === h || typeof g !== 'string') {
  console.log('both true here');
}

//if( inputName !== "" && password !== "" && confirmPassword !== ""){
// submitForm
//}

let age = 12;

// if (age > 18) {
//   console.log('Qualify for drivers license');
// } else {
//   console.log('Not qualify for drivers license');
//   console.log('Apply again');
// }

age > 18
  ? console.log('Qualify for drivers license')
  : console.log('Not qualify for drivers license');

//kumuha data student id = 123 result = """";
let result = '';

result === '' ? 'DISPLAY NO RECORDS RETRIEVED' : 'DISPLAY RESULT';

// a = 90 pataas
// b = 80-89 pataas
// c = 75-79
// F = 74 pababa

const grade = 85;

let letter_grade = grade >= 90 ? 'A' : grade >= 80 ? 'B' : grade >= 75 ? 'C' : 'F';

console.log(letter_grade);

const dayOfWeek = 'Saturday';

switch (dayOfWeek) {
  case 'Monday':
    console.log('Monday');
    break;
  case 'Tuesday':
    console.log('Tuesday');
    break;
  case 'Wednesday':
    console.log('Wednesday');
    break;
  case 'Thursday':
    console.log('Thursday');
    break;
  default:
    console.log('A');
    break;
}

var array_object = ['Sunday', 1, true, { Wednesday: '' }, 1.09, 'Friday', 'Saturday'];

var array_ito = [true, 12, 'string', { age: 30 }, 'string'];

var list_students = [
  { name: 'Edgar', course: 'IT' },
  { name: 'Ryan', course: 'ComSci' },
  { name: 'Kat', course: 'ComEng' },
];

console.log('Students Length-', list_students.length);

array_object.map(() => {});

console.log(array_object);

for (let i = 0; i < array_object.length; i++) {
  //array_object[4]
  console.log(array_object[i]);
}

//print number 1-10 using for loop
//compute sum 1-5 using for loop
let aaa = 6;
// while (aaa < 5) {
//   console.log('FROM WHILE', aaa);
//   aaa++;
// }

do {
  console.log('FROM DO', aaa); //1
  aaa++; //2
  console.log('FROM DO', aaa); //1
} while (aaa < 5); //3 2 < 5

// do {
//     //sabi mo po check if the input is number
//     gagawin nya agad to
//     sabi mo po, if yes save sa db
//     }while (dapat number ung input)

// do {
//   //check user input is numberl
//   //save_db
// } while (dapatnumberito);

// while(dapatnumberito){

// }
