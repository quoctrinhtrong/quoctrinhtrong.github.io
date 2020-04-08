import * as types from '../constants/ActionTypes';



var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
  
var genarateId = () => {
    return s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4();
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data? data : [];

var myReducer = (state = initialState, action) => {
    let tasks = [...state];
    let index = -1;
    switch(action.type) {
        case types.LIST_ALL: 
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id ? action.task.id: genarateId(),
                name: action.task.name,
                status: action.task.status
            };
            if(action.task.id) {
                // Edit
                index = tasks.findIndex((task) => {
                    return task.id === action.task.id;
                });
                if(index !== -1) {
                    tasks[index] = task;
                }
            } else {
                // Add
                tasks.push(task);
            }
            localStorage.setItem('tasks',JSON.stringify(tasks));
            return tasks;
        case types.UPDATE_STATUS_TASK:
            // let index = this.findIndex(action.id);
            index = tasks.findIndex((task)=> {
              return task.id === action.id;
            });
            if(index !== -1) {
                tasks[index] = {
                    ...tasks[index],
                    status: !tasks[index].status
                }
                localStorage.setItem('tasks',JSON.stringify(tasks));
                // return tasks;
            }
            return tasks;
        case types.DELETE_TASK:
            // let tasks = [...state];
            index = tasks.findIndex((task)=> {
                return task.id === action.id;
            });
            tasks.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(tasks));
            return tasks;
        default: return state;
    }
}

export default myReducer;