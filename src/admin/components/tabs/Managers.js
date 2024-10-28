import React, { memo, useEffect, useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as adminActions from '../../Actions';
import * as createManagerActions from '../../modals/createManager/Actions';
import Button from '../../../components/button/Button';
import Accordion from '../../../components/accordion/Accordion';
import Label from '../../../components/label/Label';
import { removeManager } from '../../Actions';

const Managers = ({
	getManagers,
	loadingManagers,
	managers,
	toggleCreateManagerModal,
	removeManager,
}) => {
	useEffect(() => {
		getManagers();
	}, []);

	return (
		<div className="admin-section">
			<header className="admin-section-header">
				<div className="btn-group">
					<Button
						iconName="icon-add"
						title="Add manager"
						onClick={() => toggleCreateManagerModal({ open: true })}
					/>
				</div>
			</header>

			{!!managers?.length &&
				managers.map((item) => {
					const { _id, name, email, games } = item || {};

					return (
						<Accordion
							key={_id}
							className="admin-page-accordion"
							onClick={() => {}}
							bordered
							section={
								<div className="row middle-xs">
									<div className="col xs-6">
										<h4 className="title">{name}</h4>
										<span className="info">{email}</span>
									</div>
									<div className="col xs-6">
										<div className="btn-group right">
											<Button
												// onClick={logOut}
												iconName="icon-delete"
												className=""
												// title="remove admin"
												type="icon"
												onClick={(e) => {
													e.preventDefault();
													e.stopPropagation();
													removeManager(_id);
												}}
											/>
										</div>
									</div>
									<span className="icon icon-expand-more" />
								</div>
							}
							content={
								<div>
									{games?.map((game) => (
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
														<div className="btn-group right">
															<Button
																// onClick={logOut}
																type="icon"
																iconName="icon-delete"
																className=""
																// title="remove game"
															/>
														</div>
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
																<div className="btn-group right">
																	<Button
																		// onClick={logOut}
																		iconName="icon-delete"
																		className=""
																		type="icon"
																	/>
																</div>
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
				})}
		</div>
	);
};

const mapStateToProps = ({ adminReducer }) => ({
	loadingManagers: adminReducer.loadingManagers,
	managers: adminReducer.managers,
});

const mapDispatchToProps = {
	getManagers: adminActions.getManagers,
	removeManager: adminActions.removeManager,
	toggleCreateManagerModal: createManagerActions.toggleCreateManagerModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Managers);
