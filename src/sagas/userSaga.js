import {takeLeading, delay} from 'redux-saga/effects';

function* loginRequest(value) {
  try {
    yield delay(5000);
    console.log('loginRequest', value);
  } catch (error) {}
}

export default function* useerRootSaga() {
  yield takeLeading('LOGIN_REQUEST', loginRequest);
}
