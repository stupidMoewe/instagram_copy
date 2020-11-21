import { combineReducers } from 'redux';
import authReducer from 'store/reducers/auth';
import picReducer from 'store/reducers/pictures';

export default combineReducers({
	auth: authReducer,
	pictures: picReducer
});
