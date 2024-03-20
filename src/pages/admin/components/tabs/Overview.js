import React, { memo, useEffect, useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as adminActions from '../../Actions';
import Button from '../../../../components/button/Button';
import Accordion from '../../../../components/accordion/Accordion';
import Label from '../../../../components/label/Label';
import * as createManagerActions from '../../modals/createManager/Actions';

const Overview = ({ data, getAdminData, toggleCreateManagerModal }) => {
	const { client, managers } = data || {};
	const { role, name, email, games } = client || {};

	const canManageManagers = useMemo(() => role === 'admin', [data]);

	useEffect(() => {
		getAdminData();
	}, []);

	return (
		<>
			<div className="admin-section">
				<header className="admin-section-header">
					<h3>Games</h3>
					<div className="btn-group">
						<Button
							iconName="icon-add"
							title="Add manager"
							onClick={() => toggleCreateManagerModal({ open: true })}
						/>
					</div>
				</header>
				{!!games?.length &&
					games.map((game) => (
						<Accordion
							key={game.id}
							className="admin-page-accordion"
							bordered
							onClick={() => {}}
							section={
								<div className="row middle-xs">
									<div className="col xs-8 s-6">
										<h4 className="title">{game.name}</h4>
										<span className="info hide show-xs">
											codes count: {game.codes.length}
										</span>
									</div>
									<div className="col hide-xs s-3">
										<span className="info">
											codes count: {game.codes.length}
										</span>
									</div>
									<div className="col xs-4 s-3">
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
										<li key={code} className="codes-list-item row middle-xs">
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

			{role === 'admin' && (
				<div className="admin-section">
					<header className="admin-section-header">
						<h3>Managers</h3>
						<div className="btn-group">
							<Button iconName="icon-add" title="Add manager" />
						</div>
					</header>

					{!!managers?.length &&
						managers.map((item) => {
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
												<div className="btn-group right">
													<Button
														// onClick={logOut}
														iconName="icon-delete"
														className=""
														// title="remove admin"
														type="icon"
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
																<h4 className="title">
																	{game.name}
																</h4>
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
																	<div className="col xs-6">
																		{code}
																	</div>
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
			)}
		</>
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
	toggleCreateManagerModal: createManagerActions.toggleCreateManagerModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Overview);
