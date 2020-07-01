let fee = true;
fee = false;
console.log(fee);
let score = 10;
score = 11;
console.log(score);
let username = "quoc";
username = 'trongquoc';
username = `Fee: ${fee}, Score: ${score}`;
console.log(username);
let arrayNumber = [1, 2, 3, 4];
let arrayString = ["java", "android", "typescript"];
console.log(arrayString.push("new string"));
console.log('Array Number: ', arrayNumber);
console.log('Array String: ', arrayString);
let exTuple = ["10", 10];
console.log('Tuple: ', exTuple, ' Type: ', typeof (exTuple));
var STATUS;
(function (STATUS) {
    STATUS[STATUS["CREATED"] = 200] = "CREATED";
    STATUS[STATUS["EDIT"] = 201] = "EDIT";
    STATUS[STATUS["DELETE"] = 202] = "DELETE";
})(STATUS || (STATUS = {}));
;
let action = STATUS.EDIT;
console.log("Enum action: ", action);
let exAny = 'string test';
exAny = ["10", { 'value': 1, 'value2': 2 }];
console.log('exAny: ', exAny);
let exAnyArray = ['string', 10];
console.log("exAnyArray: ", exAnyArray);
function logData() {
    console.log('Data Type Void');
    return () => {
        console.log('get Data');
    };
}
logData();
let exAssertion = 'Learn React';
let len = exAssertion.length;
console.log('Type assertions - string length: ', len);
let objOne = {};
console.log('objOne: ', objOne);
let objTwo = {
    name: 'quoc',
    age: 24,
};
let objThree = {
    name: 'quoc',
    age: 24,
    fee: false,
};
console.log('objTwo: ', objTwo);
console.log('objThree: ', objThree);
let userArray = [
    {
        name: 'quoc',
        age: 24,
    },
    {
        name: 'nam',
        age: 19,
    }
];
let userArray02 = [
    {
        name: 'userArray02',
        age: 24,
    },
    {
        name: 'userArray02',
        age: 19,
    }
];
console.log('Array object: ', userArray);
console.log('Array object 02: ', userArray02);
