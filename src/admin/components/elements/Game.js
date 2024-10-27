import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BASE_URL } from '../../../services/Constants';
import * as adminActions from '../../Actions';
import * as createGameActions from '../../modals/createGame/Actions';
import Button from '../../../components/button/Button';
import Accordion from '../../../components/accordion/Accordion';
import Label from '../../../components/label/Label';

const Game = ({ data, toggleCreateGameModal, removeGame, startGame }) => {
	const { _id, name, startDate, players, started, finished } = data || {};

	const handleRemoveGame = (e) => {
		e.stopPropagation();
		if (confirm('Do you really want to delete game?')) removeGame(_id);
	};

	const handleEditGame = (e) => {
		e.stopPropagation();
		toggleCreateGameModal({ open: true, editData: data });
	};

	const handleStartGame = (e) => {
		e.stopPropagation();

		if (started) {
			if (confirm('Do you really want to end game?')) startGame({ id: _id, finished: true });
			return;
		}

		if (confirm('Are you sure you want to start the game?')) startGame({ id: _id });
	};

	return (
		<Accordion
			className="admin-page-accordion"
			bordered
			onClick={() => {}}
			section={
				<div className="row middle-xs">
					<div className="col xs-6">
						<h4 className="title">
							{name}{' '}
							{!!started && !finished && <Label title="game in progress" color="green" />}
						</h4>
						<span className="info">players count: {players?.length || '0'}</span>
					</div>
					<div className="col xs-6">
						<div className="btn-group right">
							{!!players?.length && startDate && !finished && (
								<Button
									onClick={handleStartGame}
									type="icon"
									iconName={started ? 'icon-no' : 'icon-play'}
									className=""
								/>
							)}
							{!started && (
								<Button
									onClick={handleEditGame}
									type="icon"
									iconName="icon-edit"
									className=""
								/>
							)}
							{(!started || finished) && (
								<Button
									onClick={handleRemoveGame}
									type="icon"
									iconName="icon-delete"
									className=""
								/>
							)}
						</div>
					</div>
					<span className="icon icon-expand-more" />
				</div>
			}
			content={
				<ul className="codes-list">
					{players?.length
						? players.map(({ _id, email, name, code, package: type }) => (
								<li key={_id} className="codes-list-item row middle-xs">
									<div className="col xs-3">
										{name} {email} <Label title={type} />
									</div>
									<div className="col xs-6">{`${BASE_URL}/game/${code}`}</div>
									<div className="col xs-3">
										<div className="btn-group right">
											{/* <Button
																// onClick={logOut}
																iconName="icon-delete"
																className=""
																type="icon"
															/> */}
										</div>
									</div>
								</li>
						  ))
						: 'No players'}
				</ul>
			}
		/>
	);
};

const mapDispatchToProps = {
	removeGame: adminActions.removeGame,
	startGame: adminActions.startGame,
	toggleCreateGameModal: createGameActions.toggleCreateGameModal,
};

export default compose(connect(null, mapDispatchToProps), memo)(Game);
