var Status;
(function (Status) {
    Status[Status["NEW"] = 100] = "NEW";
    Status[Status["PROGRESS"] = 101] = "PROGRESS";
    Status[Status["DONE"] = 102] = "DONE";
})(Status || (Status = {}));
class Task {
    constructor(tasks) {
        this.getTasks = () => {
            return this.tasks;
        };
        this.tasks = tasks;
    }
}
Task.username = 'Quoc';
Task.logUserInfo = () => {
    console.log(Task.username);
};
let tasks = [
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
];
let NewTask = new Task(tasks);
console.log(NewTask.getTasks());
console.log(Task.username);
