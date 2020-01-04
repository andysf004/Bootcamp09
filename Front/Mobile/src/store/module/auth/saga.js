import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signFailure } from './action';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `sessionMobile`, { id });

    const { checkin, token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(checkin, token));
  } catch (err) {
    yield put(signFailure());
  }
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
