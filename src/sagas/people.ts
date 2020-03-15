import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_PEOPLE, GET_PEOPLE_SUCCESS } from '../actions/people';
import { GET_DATA, GET_DATA_SUSEFUL, GET_DATA_ERROR } from '../actions/main';
import Api from '../services/api';

export function* getAllPeople() {
  yield put({ type: GET_DATA });
  try {
    const { response, error } = yield call(Api.getAllPeople);
    if (response) {
      const { results } = response.data;
      yield put({ type: GET_DATA_SUSEFUL });
      yield put({ type: GET_PEOPLE_SUCCESS, payload: results });
    } else {
      yield put({ type: GET_DATA_ERROR, payload: error.message });
    }
  } catch {
    yield put({ type: GET_DATA_ERROR, payload: 'Something went wrong' });
  }
}

export default function* watchGetPeople() {
  yield takeEvery(GET_PEOPLE, getAllPeople);
}
