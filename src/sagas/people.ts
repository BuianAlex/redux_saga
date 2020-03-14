import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_PEOPLE, GET_PEOPLE_SUCCESS } from '../actions/people';
import { GET_DATA, GET_DATA_SUSEFUL, GET_DATA_ERROR } from '../actions/main';
import Api from '../services/api';

export function* getAllPeople() {
  yield put({ type: GET_DATA });
  try {
    const resApi = yield call(Api.getAllPeople);
    if (resApi) {
      const { results } = resApi.data;
      yield put({ type: GET_DATA_SUSEFUL });
      yield put({ type: GET_PEOPLE_SUCCESS, payload: results });
    } else {
      yield put({ type: GET_DATA_ERROR });
    }
  } catch {
    yield put({ type: GET_DATA_ERROR });
  }
}

export default function* watchGetPeople() {
  yield takeEvery(GET_PEOPLE, getAllPeople);
}
