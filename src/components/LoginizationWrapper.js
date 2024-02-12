import React from 'react';
import PropTypes from 'prop-types';

const LoginizationWrapper = ({image, children}) => (
	<main className="main auth-page">
		<div className="illustration-panel hide-xs">
			<div className="container">
				<div className="row">
					<div className="col s-5">
						<div className="img-wrap">
							<img
								src={image}
								className="img"
								alt="illustration"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container main-content">
			<div className="row middle-s">
				<div className="col s-7 s-offset-5">
					<div className="form-wrap ">
						{children}
					</div>
				</div>
			</div>
		</div>
	</main>
);

LoginizationWrapper.propTypes = {
	image: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default LoginizationWrapper;
