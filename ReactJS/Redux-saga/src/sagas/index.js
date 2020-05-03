import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';
import * as typeActions from '../constants/task';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import { STATUS_CODE, STATUS } from '../constants/index';
import {
  fetchListTaskSuccess,
  fetchListTaskError,
  filterTaskSuccess,
  fetchListTask,
  addTaskSuccess,
  addTaskError,
  updateTaskSuccess,
  updateTaskError,
  deleteTaskSuccess,
  deleteTaskError,
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';

/**
 *
 *
 */
function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(typeActions.FETCH_TASK);
    // show loading
    yield put(showLoading());
    const { params } = action.payload;
    // take: code below only run when FETCH_TASK action dispatch
    const resp = yield call(getList, params);
    // call is block to when done
    const { status, data, error } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch fetch list success
      yield put(fetchListTaskSuccess(data));
    } else {
      // dispatch fetch list fail
      yield put(fetchListTaskError(error));
    }
    // deplay 1s after call api
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({ q: keyword }));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUS[0].value,
  });
  const { status, data, error } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskError(error));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskId = yield select((state) => state.task.taskEditing.id);
  yield put(showLoading());
  const resp = yield call(
    updateTask,
    {
      title,
      description,
      status,
    },
    taskId,
  );
  const { data, error } = resp;
  if (resp.status === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskError(error));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteTask, id);
  const { error } = resp;
  if (resp.status === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskError(error));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* rootSaga() {
  // redirect saga
  yield fork(watchFetchListTaskAction);
  yield takeLatest(typeActions.FILTER_TASK, filterTaskSaga);
  yield takeEvery(typeActions.ADD_TASK, addTaskSaga);
  yield takeLatest(typeActions.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(typeActions.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
