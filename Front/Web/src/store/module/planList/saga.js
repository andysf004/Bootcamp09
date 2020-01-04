import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { planStore } from './actions';

function* loadPlan() {
  const response = yield call(api.get, '/plan');
  yield put(planStore(response.data));
}

export default all([
  takeLatest('@auth/SIGN_IN_SUCCESS', loadPlan),
  takeLatest('@plan/UPDATE', loadPlan),
]);
