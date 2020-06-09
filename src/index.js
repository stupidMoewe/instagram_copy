import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'Root';
import App from 'App';
import reducer from './store/reducer';

const initialState = {
    userId: '5eb508811bfaab17e5c01318',
    username: 'Martin',
    profilPicture: 'https://picsum.photos/seed/picsum/200/300'
}

ReactDOM.render(
	<Root initialState={initialState}>
		<App />
	</Root>,
	document.getElementById('root')
);
