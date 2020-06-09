import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from 'Root';
import App from 'App';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
	<Root>
		<App />
	</Root>,
	document.getElementById('root')
);
