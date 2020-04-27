import {all} from 'redux-saga/effects';
import {fetchDataWatcher} from './sagas/imagesSaga';

export function* rootSaga() {
  yield all([fetchDataWatcher()]);
}
