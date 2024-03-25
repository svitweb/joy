import React, { memo, useEffect, useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as adminActions from '../../Actions';
import * as createGameActions from '../../modals/createGame/Actions';
import Button from '../../../../components/button/Button';
import Accordion from '../../../../components/accordion/Accordion';
import CreateGameModal from '../../modals/createGame/components/CreateGameModal';
import { removeGame } from '../../Actions';

const Overview = ({
	getOverview,
	loadingOverview,
	overviewData,
	toggleCreateGameModal,
	removeGame,
}) => {
	const { games } = overviewData || {};

	useEffect(() => {
		getOverview();
	}, []);

	return (
		<>
			<div className="admin-section">
				<header className="admin-section-header">
					<h3>Games</h3>
					<div className="btn-group">
						<Button
							iconName="icon-add"
							title="Add game"
							onClick={() => toggleCreateGameModal({ open: true })}
						/>
					</div>
				</header>
				{!!games?.length &&
					games.map(({ _id, name, codesCount, codes }) => (
						<Accordion
							key={_id}
							className="admin-page-accordion"
							bordered
							section={
								<div className="row middle-xs">
									<div className="col xs-8 s-6">
										<h4 className="title">{name}</h4>
										<span className="info hide show-xs">
											codes count: {codesCount}
										</span>
									</div>
									<div className="col hide-xs s-3">
										<span className="info">codes count: {codesCount}</span>
									</div>
									<div className="col xs-4 s-3">
										<div className="btn-group right">
											<Button
												onClick={(e) => {
													e.preventDefault();
													e.stopPropagation();
													removeGame(_id);
												}}
												type="icon"
												iconName="icon-delete"
												className=""
											/>
										</div>
									</div>
									<span className="icon icon-expand-more" />
								</div>
							}
							content={
								<ul className="codes-list">
									{codes?.map((code) => (
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
			<CreateGameModal />
		</>
	);
};

const mapStateToProps = ({ adminReducer }) => ({
	loadingOverview: adminReducer.loadingOverview,
	overviewData: adminReducer.overviewData,
});

const mapDispatchToProps = {
	getOverview: adminActions.getOverview,
	removeGame: adminActions.removeGame,
	toggleCreateGameModal: createGameActions.toggleCreateGameModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Overview);
