import '../styles/style.scss';
import React, { memo, useEffect, useRef, useState, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as gameActions from '../Actions';
import HelmetWrapper from '../../../components/HelmetWrapper';
import GamePage from './GamePage';
import moment from 'moment';
import Button from '../../../components/button/Button';

const MainLanding = ({ gameData, changeData, loadingGetGame, game, getGame }) => {
	const { code } = useParams();

	const { started, start, finished } = game || {};

	useEffect(() => {
		getGame({ code });
	}, []);

	useEffect(() => {
		console.log('gameData', gameData);
		if ((finished || (start && !started)) && Object.keys(gameData).length) {
			changeData({});
			// const interval = setInterval(() => {
			// 	getGame({ code });
			// }, 10000);
			// return () => clearInterval;
		}
	}, [game, gameData]);

	return (
		<>
			<HelmetWrapper title="UPGRADE-GAME" description="Upgrade yourself" />
			{!!started && !finished && <GamePage />}
			{!!start && !started && (
				<div>
					<h1>Game will start at: {moment(start).format('DDD MMMM - HH:mm')}</h1>
					<p>Once game started our manager will connect with you</p>
					<Button title="Go home page" link={'/'} />
				</div>
			)}
			{!loadingGetGame && !game && (
				<div>
					<h1>
						Game not found, connect with our manager to get information about your game
					</h1>
					<Button title="Go home page" link={'/'} />
				</div>
			)}
			{!!game && !!finished && (
				<div>
					<h1>Your game finished</h1>
					<p>Thank you for playing</p>
					<p>connect with us to get more games</p>
					<Button title="Go home page" link={'/'} />
				</div>
			)}
		</>
	);
};

const mapStateToProps = ({ gamePageReducer }) => ({
	game: gamePageReducer.game,
	loadingGetGame: gamePageReducer.loadingGetGame,
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	getGame: gameActions.getGame,
	changeData: gameActions.changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(MainLanding));
