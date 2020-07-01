// boolean
let fee: boolean = true;
fee = false;
console.log(fee);

// number
let score: number = 10;
score = 11;
console.log(score);

// string
let username: string = "quoc";
username = 'trongquoc';
username = `Fee: ${fee}, Score: ${score}`;
console.log(username);

// array
let arrayNumber: Array<number> = [1,2,3,4];
let arrayString: string[] = ["java", "android", "typescript"];

console.log(arrayString.push("new string"));
console.log('Array Number: ', arrayNumber);
console.log('Array String: ', arrayString);

// Tuple
let exTuple: [string, number] = ["10", 10];
console.log('Tuple: ',exTuple, ' Type: ', typeof(exTuple));

// Enum
enum STATUS { CREATED = 200, EDIT, DELETE};
let action: STATUS = STATUS.EDIT;
console.log("Enum action: ", action);

// Any
let exAny: any = 'string test';
exAny = ["10",{'value':1,'value2': 2}];
console.log('exAny: ', exAny);

let exAnyArray: any[] = ['string', 10];
console.log("exAnyArray: ", exAnyArray);

// Function
function logData():any {
    console.log('Data Type Void');
    return () => {
        console.log('get Data')
    }
}
logData();

// Type assertions
let exAssertion: any = 'Learn React';

// let len:number = (exAssertion as string).length;
let len:number = (<string>exAssertion).length;
console.log('Type assertions - string length: ', len);

// Object interface
let objOne: any = {};
console.log('objOne: ',objOne);

interface PropsInterface {
    name: string;
    age: number;
    fee?: boolean; // fee? là có cũng được, không có cũng không báo lỗi
}

let objTwo:PropsInterface = {
    name: 'quoc',
    age: 24,
}

let objThree:PropsInterface = {
    name: 'quoc',
    age: 24,
    fee: false,
}

console.log('objTwo: ', objTwo);
console.log('objThree: ', objThree);

// Array interface

interface UserList {
    [index: number]: PropsInterface
}

let userArray: UserList = [
    {
        name: 'quoc',
        age: 24,
    },
    {
        name: 'nam',
        age: 19,
    }
];

let userArray02: PropsInterface[] = [
    {
        name: 'userArray02',
        age: 24,
    },
    {
        name: 'userArray02',
        age: 19,
    }
]

console.log('Array object: ', userArray);
console.log('Array object 02: ', userArray02);