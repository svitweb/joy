import React, { memo, useEffect, useMemo, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BASE_URL } from '../../../services/Constants';
import * as adminActions from '../../Actions';
import * as createManagerActions from '../../modals/createManager/Actions';
import * as createGameActions from '../../modals/createGame/Actions';
import Button from '../../../components/button/Button';
import Accordion from '../../../components/accordion/Accordion';
import Label from '../../../components/label/Label';
import Spinner from '../../../components/Spinner';
import Game from '../elements/Game';

const Games = ({ getGames, loadingGames, games, toggleCreateGameModal, removeGame, startGame }) => {
	const [formattedGames, setFormattedGames] = useState([]);

	useEffect(() => {
		getGames();
	}, []);

	useEffect(() => {
		if (games) {
			const categorizeGames = [
				{
					title: 'In Progress Games',
					data: games.filter((game) => game.started && !game.finished),
				},
				{
					title: 'Pending Games',
					data: games.filter((game) => !game.started && !game.finished),
				},
				{ title: 'Finished Games', data: games.filter((game) => game.finished) },
			];

			const formattedGames = categorizeGames.filter(({ data }) => data.length > 0);

			setFormattedGames(formattedGames);
		}
	}, [games]);

	return (
		<div className="admin-section">
			<header className="admin-section-header">
				<div className="btn-group">
					<Button
						iconName="icon-add"
						title="Create game"
						onClick={() => toggleCreateGameModal({ open: true })}
					/>
				</div>
			</header>
			{loadingGames && <Spinner />}
			{formattedGames?.length
				? formattedGames.map((section) => (
						<section className="page-section" key={section.title}>
							<h3 className="page-section-title">{section.title}</h3>
							{section.data.map((game) => (
								<Game key={game._id} data={game} />
							))}
						</section>
				  ))
				: 'No games'}
		</div>
	);
};

const mapStateToProps = ({ adminReducer }) => ({
	loadingGames: adminReducer.loadingManagers,
	games: adminReducer.games,
});

const mapDispatchToProps = {
	getGames: adminActions.getGames,
	removeGame: adminActions.removeGame,
	startGame: adminActions.startGame,
	toggleCreateGameModal: createGameActions.toggleCreateGameModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Games);
