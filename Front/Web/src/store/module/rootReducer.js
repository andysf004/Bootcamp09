import { combineReducers } from 'redux';

import auth from './auth/reducer';
import studentList from './studentList/reducer';
import planList from './planList/reducer';

export default combineReducers({ auth, studentList, planList });
