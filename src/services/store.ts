import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // or whatever storage you are using
import reducers from '../reducers';
import sagas from '../sagas';

const config = {
  key: 'primary',
  storage
};

const reducer = persistCombineReducers(config, reducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  undefined,
  compose(applyMiddleware(...[thunk, sagaMiddleware]))
);

sagaMiddleware.run(sagas);
export default store;
