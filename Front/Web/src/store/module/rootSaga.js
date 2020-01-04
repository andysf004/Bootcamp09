import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import studentList from './studentList/saga';
import planList from './planList/saga';

export default function* rootSaga() {
  return yield all([auth, studentList, planList]);
}
