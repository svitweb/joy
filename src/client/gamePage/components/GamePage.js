import '../styles/style.scss';
import React, { memo, useEffect, useRef, useState, lazy } from 'react';
// import ReactPlayer from 'react-player/lazy';
import classNames from 'classnames';

const Labyrinth = lazy(() => import('./Labyrinth'));
const Tower = lazy(() => import('./Tower'));
const CardsMenu = lazy(() => import('./CardsMenu'));
const CardModal = lazy(() => import('../../../components/modals/card/components/CardModal'));
const LabyrinthQuestionModal = lazy(() =>
	import('../../../components/modals/labyrinthQuestion/components/LabyrinthQuestionModal'),
);
const TowerModal = lazy(() => import('../../../components/modals/tower/components/TowerModal'));
const AudioVisualization = lazy(() =>
	import('../../../components/audioVisualization/components/AudioVisualization'),
);

import pBg from '../../../images/gameIllustrations/bg/purpleBg.jpg';
import bBg from '../../../images/gameIllustrations/bg/blueBg.jpg';
import gBg from '../../../images/gameIllustrations/bg/goldBg.jpg';
import rBg from '../../../images/gameIllustrations/bg/redBg.jpg';
// import tBg from '../images/bg.jpg';
import tBg from '../images/bg.png';
import pBgO from '../../../images/gameIllustrations/bg/purpleBgOverlay.jpg';
import bBgO from '../../../images/gameIllustrations/bg/blueBgOverlay.jpg';
import gBgO from '../../../images/gameIllustrations/bg/goldBgOverlay.jpg';
import rBgO from '../../../images/gameIllustrations/bg/redBgOverlay.jpg';
import goldLabImg from '../images/goldLab.png';
import purpleLabImg from '../images/purpleLab.png';
import blueLabImg from '../images/blueLab.png';
import redLabImg from '../images/redLab.png';
import towerImg from '../images/tower.png';
import towerLightImg from '../images/light.png';
import towerLightBg from '../images/lightBack.png';
import towerShadow from '../images/shadow.png';
import metaCardsImg from '../images/metaCards.png';
import pBgM from '../../../images/gameIllustrations/bg/purpleBgMain.jpg';
import bBgM from '../../../images/gameIllustrations/bg/blueBgMain.jpg';
import gBgM from '../../../images/gameIllustrations/bg/goldBgMain.jpg';
import rBgM from '../../../images/gameIllustrations/bg/redBgMain.jpg';
import pBgT from '../../../images/gameIllustrations/bg/purpleBgTree.jpg';
import bBgT from '../../../images/gameIllustrations/bg/blueBgTree.jpg';
import gBgT from '../../../images/gameIllustrations/bg/goldBgTree.jpg';
import rBgT from '../../../images/gameIllustrations/bg/redBgTree.jpg';
import towerModalBg from '../../../images/gameIllustrations/bg/towerModalBg.jpg';
import finalBg from '../../../images/gameIllustrations/bg/finalBg.jpg';
// import mainAudio from '../../../music/bg1.mp3';

import { cardImages } from '../Helpers';
import CircleProgress from './CircleProgress';
import HelmetWrapper from '../../../components/HelmetWrapper';
import { connect } from 'react-redux';
import * as gameActions from '../Actions';
import { useParams } from 'react-router-dom';

const imagesToPreload = [
	...cardImages,
	pBg,
	bBg,
	gBg,
	rBg,
	tBg,
	pBgO,
	bBgO,
	gBgO,
	rBgO,
	metaCardsImg,
	goldLabImg,
	purpleLabImg,
	blueLabImg,
	redLabImg,
	towerImg,
	towerLightImg,
	towerLightBg,
	towerShadow,
	pBgM,
	bBgM,
	gBgM,
	rBgM,
	pBgT,
	bBgT,
	gBgT,
	rBgT,
	towerModalBg,
	finalBg,
];

const preloadImage = (src) =>
	new Promise((resolve, reject) => {
		const img = new Image();
		img.src = src;
		img.onload = () => resolve(src);
		img.onerror = (err) => reject(err);
	});

const GamePage = ({ gameData, getGame }) => {
	// const { code } = useParams();

	const { tower } = gameData || {};
	const { active, completed } = tower || {};

	const [desktopView, setDesktopView] = useState(false);
	const [startGame, setStartGame] = useState(false);

	const [progress, setProgress] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// getGame({ code });

		handleDesktopView();

		const loadImages = async () => {
			const totalImages = imagesToPreload.length;
			let loadedImages = 0;

			for (const src of imagesToPreload) {
				try {
					await preloadImage(src);
					loadedImages++;
					setProgress(Math.round((loadedImages / totalImages) * 100));
				} catch (error) {
					console.error(`Error loading image: ${src}`, error);
				}
			}
			setIsLoaded(true);
		};

		loadImages();

		window.addEventListener('resize', handleDesktopView);

		return () => {
			window.removeEventListener('resize', handleDesktopView);
		};
	}, []);

	const handleDesktopView = () => {
		setDesktopView(window.innerWidth >= 1200);
	};

	// const [playing, setPlaying] = useState(true);
	// const [playedSeconds, setPlayedSeconds] = useState(0);
	// const playerRef = useRef(null);

	const onStart = () => {
		setStartGame(true);
		// playerRef?.current?.play();
	};

	return (
		<>
			{/*<HelmetWrapper title="UPGRADE-GAME" description="Upgrade yourself" />*/}
			{/* <div className="audio-player">
				<ReactPlayer
					ref={playerRef}
					className="hidden"
					width={0}
					height={0}
					url={mainAudio}
					playing={true}
					volume={0.5}
				/>
				<Button type="icon" onClick={() => {}} iconName="icon-mute" />
			</div> */}
			{!isLoaded || !startGame ? (
				<div className="loading-section">
					<CircleProgress
						progress={progress}
						size={120}
						strokeWidth={10}
						isLoaded={isLoaded}
						onStart={onStart}
					/>
				</div>
			) : (
				<>
					<main className={classNames('page-content game-page', { active })}>
						<div className="container game-page-container">
							<div className={classNames('row', { 'hide-xs': active })}>
								<div className="col xs-6 s-4">
									<Labyrinth type="purple" />
								</div>
								<div className="col xs-6 s-4 s-offset-4">
									<Labyrinth type="blue" />
								</div>
								<div className="col xs-6 s-4 ">
									<Labyrinth type="gold" />
								</div>
								<div className="col xs-6 s-4 s-offset-4">
									<Labyrinth type="red" />
								</div>
								<Tower disabledParallax={desktopView} className="hide-xs" />
							</div>
							<div className="row hide-s hide-m hide-l">
								<Tower disabledParallax={desktopView} />
							</div>
						</div>
						<CardsMenu />
					</main>
					<CardModal />
					<LabyrinthQuestionModal />
					<TowerModal />
					<AudioVisualization />
				</>
			)}
		</>
	);
};

const mapStateToProps = ({ gamePageReducer }) => ({
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	getGame: gameActions.getGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(GamePage));
