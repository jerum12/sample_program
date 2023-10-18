import * as Test from './export.mjs';

import { add, displayError, generateReferenceNumber } from './utilities.mjs';

const ref_number = generateReferenceNumber();
const rand_name = Test();
const sum = add(1, 2);

console.log(ref_number, sum);
displayError('Hello, world');
