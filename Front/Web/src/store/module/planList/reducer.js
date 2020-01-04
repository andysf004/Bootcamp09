import produce from 'immer';

const INITIAL_STATE = {
  plan: [],
  planEdition: null,
};

export default function plan(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@plan/STORE':
      return produce(state, draft => {
        draft.plan = action.payload;
      });
    case '@plan/EDITION':
      return produce(state, draft => {
        draft.planEdition = action.payload;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.plan = [];
      });
    default:
      return state;
  }
}
