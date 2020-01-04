export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(checkin, token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { checkin, token },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
