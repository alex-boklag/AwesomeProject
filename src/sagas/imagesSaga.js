import {put, takeEvery} from 'redux-saga/effects';
import {saveImages} from '../actions/imagesActions';
import {FETCH_IMAGES} from '../types';

function* fetchData({payload: {api, axios}}) {
  let images;

  try {
    yield axios.get(api).then(resp => (images = resp.data.images));
  } catch (error) {
    console.log(error);
  }

  yield put(saveImages(images));
}

export function* fetchDataWatcher() {
  yield takeEvery(FETCH_IMAGES, fetchData);
}
