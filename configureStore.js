import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/reducers';
import rootSaga from './src/sagas';
// import thunk from 'redux-thunk';
// import log from './src/middleware/logMiddleware';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
