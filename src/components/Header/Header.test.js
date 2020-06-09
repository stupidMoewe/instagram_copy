import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

import Root from 'Root';
import Router from 'Router';

describe('header tests', () => {
	let wrapper;

	beforeEach(() => {
		const initialState={
			auth: {
				userId: '5eb508811bfaab17e5c01318',
				username: 'Martin',
				profilPicture: 'https://picsum.photos/seed/picsum/200/300'
			}
		}
		wrapper = mount(
			<Root initialState={initialState}>
				<Router>
					<Header />
				</Router>
			</Root>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('shows the logo of the app', () => {
		expect(wrapper.find('a').render().text()).toEqual('Instagram');
	});

	it('shows a search input', () => {
		expect(wrapper.find('input').length).toEqual(1);
	});

	it('shows the username of the user logged',()=>{
		console.log(wrapper.find('p').render().text())
		expect(wrapper.find('p').render().text()).toContain('Martin');
	})
});
