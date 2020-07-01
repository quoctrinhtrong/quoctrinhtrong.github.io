// Return in function
function returnVoid(): void {
    console.log('returnVoid');
}

function returnNumber(): number {
    return 2;
}

function returnArray(): string[] {
    return ['learn typescript', 'learn react'];
}

function returnAny(): any {
    return 'any string';
}

returnVoid();
console.log('returnNumber: ', returnNumber());
console.log('returnArray: ', returnArray());
console.log('returnAny: ', returnAny());

// Pass parameter
console.log('---------Pass parameter---------')
// Tham số đầy đủ
function getUserInfo(name: string, age:number): string {
    return `My name is ${name}, ${age} year old`;
}

console.log(getUserInfo('quoc', 24));

// Tham số mặc định
function getUserInfo02(name: string = 'nam', age:number = 20): string {
    return `My name is ${name}, ${age} year old`;
}

console.log(getUserInfo02());

// Tham số khuyết (có thể truyền hoặc không)
function getUserInfo03(name: string = 'Quang', age?:number): string {
    if(age == null) {
        return `My name is ${name}`;
    }
    return `My name is ${name}, ${age} year old`;
}

console.log(getUserInfo03());

// Truyền biến theo kiểu hoặc
// (string | any[]): Có thể truyền param là string hoặc array
function getLengthParam(param1: (string | any[]), param2: string[]):number {
    return (param1.length + param2.length);
}

console.log('getLengthParam: ',getLengthParam('quoc', ['abc', 'xyz']));
console.log('getLengthParam: ',getLengthParam([1,'2',3], ['abc', 'xyz']));

// Rest parameter
function logSource(name: string, ...cource:string[]) {
    return `${name} learn ${cource.join(", ")}`;
}

console.log('Rest parameter: ',logSource('quoc','react', 'typescript'));

// Các kiểu khai bao function
console.log('----------------------Các kiểu khai bao function-----------------------')
function getCourseInfo(name:string, date:string): string {
    return `coure is ${name}, start from ${date}`;
}

let getCourseInfo02 = function(name:string, date:string): string {
    return `coure is ${name}, start from ${date}`;
}

let getCourseInfo03: (name: string, date:string) => string = function(name, date) {
    return `coure is ${name}, start from ${date}`;
}

console.log('getCourseInfo: ', getCourseInfo('React: ', '15/07/2020'));
console.log('getCourseInfo02: ', getCourseInfo02('React: ', '15/07/2020'));
console.log('getCourseInfo03: ', getCourseInfo03('React: ', '15/07/2020'));

// Arrow function
console.log('----------------Arrow Function---------------------');
let exArrowFunc = (name: string): string => {
    return `name: ${name}`;
}

let exArrowFunc02 = (name: string) => (
    `<input>${name}</input>`
)

console.log('exArrowFunc: ', exArrowFunc('Nam'));
console.log('exArrowFunc02: ', exArrowFunc02('Nam'));

// Overload function



