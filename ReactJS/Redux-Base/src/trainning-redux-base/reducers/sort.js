var initialState = {
        by: 'name',
        value: 1
}

var myReducer = (state = initialState, action) => {

    if(action.type ==='SORT') {
        console.log(action);
        return {
            by: action.sort.by,
            value: action.sort.value
        }
    }
    return state;
}

export default myReducer;