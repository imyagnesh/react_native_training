import AsyncStorage from '@react-native-async-storage/async-storage';
import {takeLeading, delay, call} from 'redux-saga/effects';
// import {CommonActions} from '@react-navigation/native';
import {navigationRef} from '../../rootNavigator';

function* loginRequest(value) {
  try {
    // yield delay(5000);
    yield call(AsyncStorage.setItem, '@NousApp_firstTime', 'true');
    navigationRef.resetRoot({
      index: 0,
      routes: [{name: 'Main'}],
    });
    console.log('loginRequest', value);
  } catch (error) {
    console.log('error', error);
  }
}

export default function* useerRootSaga() {
  yield takeLeading('LOGIN_REQUEST', loginRequest);
}
