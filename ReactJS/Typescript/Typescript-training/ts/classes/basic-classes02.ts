enum Status {
    NEW = 100,
    PROGRESS,
    DONE
}

interface TaskList {
    id:number;
    name: string;
    status: Status;
}

class Task {
    // static là chỉ có những 
    static username:string = 'Quoc';
    tasks: TaskList[];
    constructor(tasks:TaskList[]) {
        this.tasks = tasks;
    }

    getTasks = () => {
        return this.tasks;
    }

    static logUserInfo = () => {
        console.log(Task.username);
    }
}

let tasks:TaskList[] = [
    {
        id: 1,
        name: 'Learn React Hooks',
        status: Status.DONE,
    },
    {
        id: 2,
        name: 'Learn redux',
        status: Status.DONE,
    }
]
let NewTask = new Task(tasks);
console.log(NewTask.getTasks());
console.log(Task.username);

