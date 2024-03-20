import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { COOKIES } from '../../services/Constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isLoggedIn = Cookie.get('accessToken');

	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? (
					<Component {...props} />
				) : (
					<Component {...props} />
					// <Redirect
					//   to={{
					//     pathname: "/sign-in",
					//     state: { from: props.location }
					//   }}
					// />
				)
			}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default PrivateRoute;
