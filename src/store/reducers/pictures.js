import { FETCH_IMAGES, FETCH_USER_IMAGES } from 'store/actions/types';

const initialState = {
	pictures: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_IMAGES:
			return {
				...state,
				pictures: [ ...action.payload.pictures ]
			};
		case FETCH_USER_IMAGES:
			return {
				...state,
				pictures: [ ...action.payload.pictures ]
			};
		default:
			return state;
	}
}
