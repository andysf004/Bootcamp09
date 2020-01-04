import produce from 'immer';

const INITIAL_STATE = {
  students: [],
  search: null,
};

export default function student(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@student/STORE':
      return produce(state, draft => {
        draft.students = action.payload;
      });
    case '@student/EDITION':
      return produce(state, draft => {
        draft.search = action.payload;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.students = [];
      });
    default:
      return state;
  }
}
