import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import userInfo from './userDetailInformation';

export const rootReducer = combineReducers({
    users,
    userInfo,
    routing: routerReducer 
});

export default rootReducer;
