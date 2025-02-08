import '../styles/style.scss';
import React, { memo, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import * as gameActions from '../Actions';
import HelmetWrapper from '../../../components/HelmetWrapper';
import GamePage from './GamePage';
import Button from '../../../components/button/Button';

const MainLanding = ({ gameData, changeData, loadingGetGame, game, getGame }) => {
	const history = useHistory();
	const { code } = useParams();
	const { t } = useTranslation();

	const { started, start, finished } = game || {};

	useEffect(() => {
		getGame({ code });
	}, []);

	useEffect(() => {
		if ((finished || (start && !started)) && Object.keys(gameData).length) {
			changeData({});
			// const interval = setInterval(() => {
			// 	getGame({ code });
			// }, 10000);
			// return () => clearInterval;
		}
	}, [game, gameData]);

	const goToHomeAndScroll = () => {
		history.push('/', { scrollTo: 'contactForm' });
	};

	return (
		<>
			<HelmetWrapper title="UPGRADE-GAME" description="Upgrade yourself" />
			{!!started && !finished && <GamePage />}
			{!!start && !started && (
				<div className="empty-state-wrap">
					<div className="empty-state">
						<h1 className="title">
							{t('game.pending.title', {
								time: moment(start).format('DD/MM - HH:mm'),
							})}
						</h1>
						<p className="desc">{t('game.pending.description')}</p>
						<Button title={t('game.pending.btn')} link={'/'} />
					</div>
				</div>
			)}
			{!loadingGetGame && !game && (
				<div className="empty-state-wrap">
					<div className="empty-state">
						<h1 className="title">{t('game.not_found.title')}</h1>
						<p className="desc">{t('game.not_found.description')}</p>
						<Button title={t('game.not_found.btn')} onClick={goToHomeAndScroll} />
					</div>
				</div>
			)}
			{!!game && !!finished && (
				<div className="empty-state-wrap">
					<div className="empty-state">
						<h1 className="title">{t('game.finished.title')}</h1>
						<p className="desc">{t('game.finished.description')}</p>
						<Button title={t('game.finished.btn')} link={'/'} />
					</div>
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
