import React, { memo, useEffect, useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as adminActions from '../../Actions';
import * as createManagerActions from '../../modals/createManager/Actions';
import Button from '../../../components/button/Button';
import Accordion from '../../../components/accordion/Accordion';
import Label from '../../../components/label/Label';
import { getGames, removeManager } from '../../Actions';
import { toggleCreateGameModal } from '../../modals/createGame/Actions';
import * as createGameActions from '../../modals/createGame/Actions';
import Spinner from '../../../components/Spinner';

const Games = ({ getGames, loadingGames, games, toggleCreateGameModal }) => {
	useEffect(() => {
		getGames();
	}, []);

	return (
		<div className="admin-section">
			<header className="admin-section-header">
				{/* <h3>Managers</h3> */}
				<div className="btn-group">
					<Button
						iconName="icon-add"
						title="Create game"
						onClick={() => toggleCreateGameModal({ open: true })}
					/>
				</div>
			</header>
			{loadingGames && <Spinner />}
			{games?.map((game) => (
				<Accordion
					key={game.id}
					className="admin-page-accordion"
					bordered
					onClick={() => {}}
					section={
						<div className="row middle-xs">
							<div className="col xs-6">
								<h4 className="title">{game.name}</h4>
								<span className="info">codes count: {game.codes.length}</span>
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
	);
};

const mapStateToProps = ({ adminReducer }) => ({
	loadingGames: adminReducer.loadingManagers,
	games: adminReducer.games,
});

const mapDispatchToProps = {
	getGames: adminActions.getGames,
	toggleCreateGameModal: createGameActions.toggleCreateGameModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Games);
