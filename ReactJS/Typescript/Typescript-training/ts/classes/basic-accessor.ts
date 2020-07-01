class Course {
    private _name:string;

    constructor(name:string) {
        this._name = name;
    }

    
    public get name() : string {
        return this._name;
    }

    
    public set name(v : string) {
        this._name = v;
    }
}

let objCourse = new Course('React');

console.log('name: ', objCourse.name);
objCourse.name = 'Typescript';
console.log('name change: ', objCourse.name);