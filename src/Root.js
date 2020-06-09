import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from 'store/reducer';

export default ({ children, initialState = {} }) => {
	return <Provider store={createStore(reducer, initialState)}>{children}</Provider>;
};