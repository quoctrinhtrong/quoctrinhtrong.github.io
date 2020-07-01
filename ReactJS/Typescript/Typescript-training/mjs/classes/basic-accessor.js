class Course {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
let objCourse = new Course('React');
console.log('name: ', objCourse.name);
objCourse.name = 'Typescript';
console.log('name change: ', objCourse.name);
