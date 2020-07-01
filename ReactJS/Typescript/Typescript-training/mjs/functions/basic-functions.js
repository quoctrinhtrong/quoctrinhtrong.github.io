function returnVoid() {
    console.log('returnVoid');
}
function returnNumber() {
    return 2;
}
function returnArray() {
    return ['learn typescript', 'learn react'];
}
function returnAny() {
    return 'any string';
}
returnVoid();
console.log('returnNumber: ', returnNumber());
console.log('returnArray: ', returnArray());
console.log('returnAny: ', returnAny());
console.log('---------Pass parameter---------');
function getUserInfo(name, age) {
    return `My name is ${name}, ${age} year old`;
}
console.log(getUserInfo('quoc', 24));
function getUserInfo02(name = 'nam', age = 20) {
    return `My name is ${name}, ${age} year old`;
}
console.log(getUserInfo02());
function getUserInfo03(name = 'Quang', age) {
    if (age == null) {
        return `My name is ${name}`;
    }
    return `My name is ${name}, ${age} year old`;
}
console.log(getUserInfo03());
function getLengthParam(param1, param2) {
    return (param1.length + param2.length);
}
console.log('getLengthParam: ', getLengthParam('quoc', ['abc', 'xyz']));
console.log('getLengthParam: ', getLengthParam([1, '2', 3], ['abc', 'xyz']));
function logSource(name, ...cource) {
    return `${name} learn ${cource.join(", ")}`;
}
console.log('Rest parameter: ', logSource('quoc', 'react', 'typescript'));
console.log('----------------------Các kiểu khai bao function-----------------------');
function getCourseInfo(name, date) {
    return `coure is ${name}, start from ${date}`;
}
let getCourseInfo02 = function (name, date) {
    return `coure is ${name}, start from ${date}`;
};
let getCourseInfo03 = function (name, date) {
    return `coure is ${name}, start from ${date}`;
};
console.log('getCourseInfo: ', getCourseInfo('React: ', '15/07/2020'));
console.log('getCourseInfo02: ', getCourseInfo02('React: ', '15/07/2020'));
console.log('getCourseInfo03: ', getCourseInfo03('React: ', '15/07/2020'));
console.log('----------------Arrow Function---------------------');
let exArrowFunc = (name) => {
    return `name: ${name}`;
};
let exArrowFunc02 = (name) => (`<input>${name}</input>`);
console.log('exArrowFunc: ', exArrowFunc('Nam'));
console.log('exArrowFunc02: ', exArrowFunc02('Nam'));
