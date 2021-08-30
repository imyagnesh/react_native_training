import {call, put, takeEvery} from 'redux-saga/effects';

function* loadProductRequest({payload: {page, limit}}) {
  try {
    const res = yield call(
      fetch,
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
    );
    const json = yield res.json();
    yield put({type: 'LOAD_PRODUCTS_SUCCESS', payload: json});
  } catch (error) {
    yield put({type: 'LOAD_PRODUCTS_FAIL', payload: error});
  }
}

export default function* ProductsRootSaga() {
  yield takeEvery('LOAD_PRODUCTS_REQUEST', loadProductRequest);
}
