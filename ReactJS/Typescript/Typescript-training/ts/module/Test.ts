import {StringValidator} from './Validation';
import {ZipCodeValidator} from './ZipCodeValidator';
import {LettersOnlyValidator} from './LettersOnlyValidator';
// c1
// import * as TestModule from './TestModule';
// c2
import {TestModule, showInfo02} from './TestModule';

// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: StringValidator } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//   for (let name in validators) {
//     console.log(
//       "ABC"
//     );
//   }
// }

let objTestModule = new TestModule();
objTestModule.showInfo();

showInfo02();

