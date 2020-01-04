export function planStore(plans) {
  return {
    type: '@plan/STORE',
    payload: plans,
  };
}

export function planEdition(plans) {
  return {
    type: '@plan/EDITION',
    payload: plans,
  };
}

export function planUpdate() {
  return {
    type: '@plan/UPDATE',
  };
}
