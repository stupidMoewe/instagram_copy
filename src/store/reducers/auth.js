import { AUTH_SUCCESS , AUTH_LOGOUT} from 'store/actions/types';

const INITIAL_STATE = {
	userId: '',
	username: '',
	profilPicture: ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				userId: action.payload.userId,
				username: action.payload.username,
				profilPicture: action.payload.profilPicture
			};
		case AUTH_LOGOUT:
			return{
				userId:'',
				username:'',
				profilPicture: ''
			}
		
		default:
			return state;
	}
}
