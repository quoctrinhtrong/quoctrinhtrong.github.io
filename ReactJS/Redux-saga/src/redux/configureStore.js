import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const composeEnhansers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHostReload: false,
      })
    : compose;

// create middleware saga
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducers, composeEnhansers(...enhancers));
  // listener action by saga
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
