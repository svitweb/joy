import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../SignIn';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

const store = mockStore({ getState: () => null, dispatch: () => null });

describe('SignIn', () => {
	it('should render correctly', () => {
		const component = shallow(
			<Provider store={store}>
				<SignIn/>
			</Provider>
			);
		expect(component).toMatchSnapshot();
	});
});
