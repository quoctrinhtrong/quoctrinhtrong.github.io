import {createStore} from 'redux';
import {status, sort} from './actions/index'
import myReducer from './reducers/index'


const store = createStore(myReducer);

// Thực hiện thay đổi status
// var action = {type:'TOGGLE_STATUS'};
console.log("DEFAULT", store.getState());
store.dispatch(status());

console.log("TOGGLE_STATUS: ",store.getState());

// Thực hiện sắp xếp công việc từ Z->A
// var sortAction = {
//     type:'SORT',
//     sort: {
//         by:'name',
//         value: -1
//     }
// };

store.dispatch(sort({
    by:"name",
    value: -1
}));

console.log("TOGGLE_STATUS: ",store.getState());