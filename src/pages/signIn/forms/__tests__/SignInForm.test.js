import React from 'react';
import {shallow} from 'enzyme';
import SignInForm from "../SignInForm";

describe('SignInForm', () => {
	it('should render correctly', () => {
		const component = shallow(
			<SignInForm/>
		);
		expect(component).toMatchSnapshot();
	});
});
