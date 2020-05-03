import * as taskConstants from '../constants/task';
import * as toastHelper from '../helpers/toastHelper';

const inititalState = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    case taskConstants.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return state;
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.ADD_TASK: {
      return {
        ...state,
      };
    }
    case taskConstants.ADD_TASK_SUCCESS: {
      toastHelper.toastSuccess('Add new task successfully !');
      return {
        ...state,
        listTask: [action.payload.data, ...state.listTask],
      };
    }
    case taskConstants.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }
    case taskConstants.SET_TASK_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    }
    case taskConstants.UPDATE_TASK: {
      return {
        ...state,
      };
    }
    case taskConstants.UPDATE_TASK_SUCCESS: {
      toastHelper.toastSuccess('Update task successfully !');
      const { data } = action.payload;
      const taskList = [...state.listTask];
      const index = taskList.findIndex((task) => {
        return task.id === data.id;
      });
      taskList[index] = data;
      return {
        ...state,
        listTask: taskList,
      };
    }
    case taskConstants.UPDATE_TASK_FAILED: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }
    case taskConstants.DELETE_TASK: {
      return {
        ...state,
      };
    }
    case taskConstants.DELETE_TASK_SUCCESS: {
      toastHelper.toastSuccess('Delete task successfully !');
      const { id } = action.payload;
      const deleteTaskList = [...state.listTask];
      const deleteIndex = deleteTaskList.findIndex((task) => {
        return task.id === id;
      });
      if (deleteIndex !== -1) {
        deleteTaskList.splice(deleteIndex, 1);
      }
      return {
        ...state,
        listTask: deleteTaskList,
      };
    }
    case taskConstants.DELETE_TASK_FAILED: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
