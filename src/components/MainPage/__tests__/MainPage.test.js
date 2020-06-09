import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import Router from 'Router';
import MainPage from '../MainPage';
import Elements from '../Elements/Elements';
import SideUser from '../SideUser/SideUser';

let wrapped;

describe('mainPage', () => {
	beforeEach(() => {
		const initialState = {};
		wrapped = mount(
			<Root initialState={initialState}>
				<Router>
					<MainPage />
				</Router>
			</Root>
		);
	});

	afterEach(() => {
		wrapped.unmount();
	});

	it('renders the containers with all the pictures', () => {
		expect(wrapped.find(Elements).length).toEqual(1);
	});

	it('renders the side container with the user informations', () => {
		expect(wrapped.find(SideUser).length).toEqual(1);
	});
});
