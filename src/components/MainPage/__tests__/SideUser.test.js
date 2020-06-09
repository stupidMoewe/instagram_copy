import React from 'react';
import { mount } from 'enzyme';
import SideUser from '../SideUser/SideUser';

import Root from 'Root';
import Router from 'Router';

describe('sideUser: logged user informations', () => {
	let wrapped;

	beforeEach(() => {
		const initialState = {
			auth: {
				userId: '5eb508811bfaab17e5c01318',
				username: 'Martin',
				profilPicture: 'https://picsum.photos/seed/picsum/200/300'
			}
		};
		wrapped = mount(
			<Root initialState={initialState}>
				<Router>
					<SideUser />
				</Router>
			</Root>
		);
	});

	afterEach(() => {
		wrapped.unmount();
	});

	it('has a profile picture', () => {
		expect(wrapped.find('img').length).toEqual(1);
	});

	it('shows the name fo he user', () => {
		expect(wrapped.find('p').length).toEqual(1);
	});

	it('shows a button to add a picture', () => {
		expect(wrapped.find('h4').render().text()).toContain('Add a picture');
	});
});
