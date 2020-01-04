import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { studentStore } from './actions';

function* loadStudent() {
  const reponse = yield call(api.get, '/students');

  yield put(studentStore(reponse.data));
}

export default all([
  takeLatest('@auth/SIGN_IN_SUCCESS', loadStudent),
  takeLatest('@student/UPDATE', loadStudent),
]);
