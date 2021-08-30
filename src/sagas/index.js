import {all, fork} from 'redux-saga/effects';
import productsSaga from './productsSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([fork(productsSaga), fork(userSaga)]);
}
