import {combineReducers} from 'redux';

import userReducer from './user/user.reduder';

export default combineReducers({
    user:userReducer
});