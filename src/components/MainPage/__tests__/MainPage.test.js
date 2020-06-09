import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../MainPage';
import Elements from '../Elements/Elements';
import SideUser from '../SideUser/SideUser';

let wrapped;

describe('mainPage with', () => {
	beforeEach(() => {
		wrapped = shallow(<MainPage />);
	});

	it('renders the containers with all the pictures', () => {
		expect(wrapped.find(Elements).length).toEqual(1);
	});

	it('renders the side container with the user informations', () => {
		expect(wrapped.find(SideUser).length).toEqual(1);
	});
});
