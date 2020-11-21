import { AUTH_SUCCESS, AUTH_LOGOUT } from 'store/actions/types';

export const authSuccess = (userId, username, profilPicture) => {
	//localStorage.setItem('token', token);
	//localStorage.setItem('expirationTime');
	localStorage.setItem('username', username);
	localStorage.setItem('userId', userId);
	localStorage.setItem('profilPicture', profilPicture);
	return {
		type: AUTH_SUCCESS,
		payload: {
			userId,
			username,
			profilPicture
			//token
		}
	};
};

export const logout = () => {
	//localStorage.removeItem('token');
	//localStorage.removeItem('expirationTime');
	localStorage.removeItem('username');
	localStorage.removeItem('userId');
	localStorage.removeItem('profilPicture');
	return {
		type: AUTH_LOGOUT
	};
};

// export const authLogCheck = (dispatch) => {
// 	//const token = localStorage.getItem('token');
// 	// if (!token) {
// 	// 	return dispatch(logout());
// 	// }
// 	const username = localStorage.getItem('username');
// 	const userId = localStorage.getItem('userId');
// 	const profilPicture = localStorage.getItem('profilPicture');
// 	return dispatch(authSuccess(userId, username, profilPicture));
// };

export const authLogCheck = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		// if (!token) {
		// 	return dispatch(logout());
		const username = localStorage.getItem('username');
		const userId = localStorage.getItem('userId');
		const userProfilePic = localStorage.getItem('profilPicture');
		if (!username || !userId || !userProfilePic) {
			dispatch(authSuccess('', '', ''));
		} else {
			dispatch(authSuccess(userId, username, userProfilePic));
		}
	};
};
