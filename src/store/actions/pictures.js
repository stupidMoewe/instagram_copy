import axios from 'axios';

import { SAVE_IMAGE, FETCH_IMAGES, FETCH_USER_IMAGES } from 'store/actions/types';
//import { useParams } from 'react-router-dom';

export function saveImage(imageUrl) {
	return {
		type: SAVE_IMAGE,
		payload: imageUrl
	};
}

export const fetchImages = async (dispatch) => {
	const response = await axios.get('http://localhost:5000/api/pictures/');
	dispatch({ type: FETCH_IMAGES, payload: response.data });
};

export const fetchUserImages = (userId) => {
	return async (dispatch) => {
		console.log(userId);
		const response = await axios.get('http://localhost:5000/api/pictures/user/' + userId);
		dispatch({ type: FETCH_USER_IMAGES, payload: response.data });
	};
};

// export const findUserForImage = async (dispatch, userId) => {
//     const response = await axios.get('http://localhost:5000/api/' + userId);
//     dispatch({type: GET_USER_INFO})
// };
