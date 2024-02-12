import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as adminActions from '../../Actions';
import Button from '../../../../components/button/Button';
import Accordion from '../../../../components/accordion/Accordion';

const Overview = ({ data, getAdminData }) => {
	useEffect(() => {
		getAdminData();
	}, []);

	return (
		!!data?.length &&
		data.map((item) => {
			const { id, role, email, games } = item || {};

			return (
				<Accordion
					key={id}
					className="admin-page-accordion"
					onClick={() => {}}
					bordered
					section={
						<div className="row middle-xs">
							<div className="col xs-6">
								<h4 className="title">{role}</h4>
								<span className="info">{email}</span>
							</div>
							<div className="col xs-6">
								<div className="btn-group align-right">
									<Button
										// onClick={logOut}
										iconName="icon-delete"
										className=""
										// title="remove admin"
									/>
								</div>
							</div>
							<span className="icon icon-expand-more" />
						</div>
					}
					content={
						<div>
							{games.map((game) => (
								<Accordion
									key={game.id}
									className="inner-accordion"
									bordered
									onClick={() => {}}
									section={
										<div className="row middle-xs">
											<div className="col xs-6">
												<h4 className="title">{game.name}</h4>
												<span className="info">
													codes count: {game.codes.length}
												</span>
											</div>
											<div className="col xs-6">
												<Button
													// onClick={logOut}
													iconName="icon-delete"
													className=""
													// title="remove game"
												/>
											</div>
											<span className="icon icon-expand-more" />
										</div>
									}
									content={
										<ul className="codes-list">
											{game.codes.map((code) => (
												<li
													key={code}
													className="codes-list-item row middle-xs"
												>
													<div className="col xs-6">{code}</div>
													<div className="col xs-6">
														<Button
															// onClick={logOut}
															iconName="icon-delete"
															className=""
														/>
													</div>
												</li>
											))}
										</ul>
									}
								/>
							))}
						</div>
					}
				/>
			);
		})
	);
};

Overview.propTypes = {
	loading: PropTypes.bool,
	data: PropTypes.object,
};

const mapStateToProps = ({ adminReducer }) => ({
	loading: adminReducer.loading,
	data: adminReducer.data,
});

const mapDispatchToProps = {
	getAdminData: adminActions.getAdminData,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Overview);
