export function studentStore(student) {
  return {
    type: '@student/STORE',
    payload: student,
  };
}

export function studentUpdate() {
  return {
    type: '@student/UPDATE',
  };
}

export function studentEdition(student) {
  return {
    type: '@student/EDITION',
    payload: student,
  };
}
