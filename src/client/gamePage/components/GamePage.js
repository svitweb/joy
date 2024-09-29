import '../styles/style.scss';
import React, { memo, useEffect, useRef, useState, lazy } from 'react';
// import Labyrinth from './Labyrinth';
// import Tower from './Tower';
// import CardsMenu from './CardsMenu';
// import CardModal from '../../../components/modals/card/components/CardModal';
// import LabyrinthQuestionModal from '../../../components/modals/labyrinthQuestion/components/LabyrinthQuestionModal';
// import TowerModal from '../../../components/modals/tower/components/TowerModal';
import ReactPlayer from 'react-player/lazy';

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

import { ParallaxProvider } from 'react-scroll-parallax';

import pBg from '../../../images/gameIllustrations/bg/purpleBg.jpg';
import bBg from '../../../images/gameIllustrations/bg/blueBg.jpg';
import gBg from '../../../images/gameIllustrations/bg/goldBg.jpg';
import rBg from '../../../images/gameIllustrations/bg/redBg.jpg';
import tBg from '../images/bg.jpg';
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
import mainAudio from '../../../music/bg.mp3';

import { cardImages } from '../Helpers';
import CircleProgress from './CircleProgress';
import HelmetWrapper from '../../../components/HelmetWrapper';
import Button from '../../../components/button/Button';
import audioVisualizationReducer from '../../../components/audioVisualization/Reducer';

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

const preloadImage = (src) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = src;
		img.onload = () => resolve(src);
		img.onerror = (err) => reject(err);
	});
};

const GamePage = () => {
	const sections = useRef([]);

	const a = useRef(0);
	const [desktopView, setDesktopView] = useState(false);
	const [startGame, setStartGame] = useState(false);

	const [progress, setProgress] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
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

	/* 	useEffect(() => {
		// console.log('------', desktopView);
	}, [desktopView]); */

	const handleDesktopView = () => {
		setDesktopView(window.innerWidth >= 1200);
	};

	/* const handleScroll = (e) => {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const windowHeight = window.innerHeight;

		// Check the deltaY property of the scroll event to determine scroll direction
		if (e.deltaY > 0) {
			// Scroll down
			let tM;
			if (tM) return;

			if (scrollTop > 0 && a.current === 0) {
				console.log('-----delta', a.current);

				tM = setTimeout(() => {
					window.scrollTo({ top: windowHeight, behavior: 'smooth' });
					a.current = 1;
					clearTimeout(tM);
					tM = null;
				}, 200);
				return;
			}
			if (scrollTop > windowHeight && a.current === 1) {
				console.log('-----delta', a.current);
				tM = setTimeout(() => {
					window.scrollTo({ top: windowHeight * 2, behavior: 'smooth' });

					a.current = 2;
					clearTimeout(tM);
					tM = null;
				}, 200);

				// window.scrollTo({ top: windowHeight * 2, behavior: 'smooth' });
				// a.current = 2;
				return;
			}
			if (scrollTop > windowHeight * 2 && a.current === 2) {
				console.log('-----delta', a.current);
				tM = setTimeout(() => {
					window.scrollTo({ top: windowHeight * 3, behavior: 'smooth' });
					a.current = 3;
					clearTimeout(tM);
					tM = null;
				}, 200);

				return;
			}
			if (scrollTop > windowHeight * 3 && a.current === 3) {
				console.log('-----delta', e.deltaY);
				tM = setTimeout(() => {
					window.scrollTo({ top: windowHeight * 4, behavior: 'smooth' });
					a.current = 4;
					clearTimeout(tM);
					tM = null;
				}, 200);
			}
		} else if (e.deltaY < 0) {
			if (scrollTop < windowHeight && a.current === 1) {
				console.log('-----delta', e.deltaY);

				window.scrollTo({ top: 0, behavior: 'smooth' });
				a.current = 0;
				return;
			}
			if (scrollTop < windowHeight * 2 && a.current === 2) {
				console.log('-----delta', e.deltaY);

				window.scrollTo({ top: windowHeight, behavior: 'smooth' });
				a.current = 1;
				return;
			}

			if (scrollTop < windowHeight * 3 && a.current === 3) {
				console.log('-----delta', e.deltaY);

				window.scrollTo({ top: windowHeight * 2, behavior: 'smooth' });
				a.current = 2;
			}

			if (scrollTop < windowHeight * 4 && a.current === 4) {
				console.log('-----delta', e.deltaY);

				window.scrollTo({ top: windowHeight * 3, behavior: 'smooth' });
				a.current = 3;
			}
		}
	}; */

	// useEffect(() => {
	// 	window.addEventListener('wheel', handleScroll, { passive: true });
	//
	// 	// Clean up the event listener when the component is unmounted
	// 	return () => {
	// 		window.removeEventListener('wheel', handleScroll);
	// 	};
	// }, []);

	const [playing, setPlaying] = useState(true);
	const [playedSeconds, setPlayedSeconds] = useState(0);
	const playerRef = useRef(null);
	const aP = useRef(null);

	return (
		<>
			<HelmetWrapper title="UPGRADE-GAME" description="Upgrade yourself" />
			<div className="audio-player">
				<ReactPlayer
					ref={playerRef}
					className="hidden"
					url={mainAudio}
					playing={true}
					volume={0.5}
				/>
				{/* <audio */}
				{/* 	ref={aP} */}
				{/* 	autoPlay */}
				{/* 	loop */}
				{/* 	muted={false} */}
				{/* 	onLoad={() => { */}
				{/* 		aP?.current?.play(); */}
				{/* 	}} */}
				{/* > */}
				{/* 	<source src={mainAudio} /> */}
				{/* </audio> */}
				<Button type="icon" onClick={() => {}} iconName="icon-mute" />
			</div>
			{!isLoaded || !startGame ? (
				<div className="loading-section">
					{isLoaded ? (
						<Button
							className=""
							onClick={() => {
								setStartGame(true);
								playerRef?.current?.play();
							}}
							title="PLAY"
						/>
					) : (
						<CircleProgress progress={progress} size={120} strokeWidth={10} />
					)}
				</div>
			) : (
				<>
					<ParallaxProvider>
						<main className="page-content game-page">
							<div className="container game-page-container">
								<div className="row">
									<div className="col l-4">
										<Labyrinth type="purple" disabledParallax={desktopView} />
									</div>
									<div className="transit-bg p-b" />
									<div className="col l-4 l-offset-4">
										<Labyrinth type="blue" disabledParallax={desktopView} />
									</div>
									<div className="transit-bg b-g" />
									<div className="col l-4 ">
										<Labyrinth type="gold" disabledParallax={desktopView} />
									</div>
									<div className="transit-bg g-r" />
									<div className="col l-4 l-offset-4">
										<Labyrinth type="red" disabledParallax={desktopView} />
									</div>
									<div className="transit-bg r-t" />
									<div className="col l-4 l-offset-4 tower-col">
										<Tower disabledParallax={desktopView} />
									</div>
								</div>
							</div>
							<CardsMenu />
						</main>
					</ParallaxProvider>
					<CardModal />
					<LabyrinthQuestionModal />
					<TowerModal />
					<AudioVisualization />
				</>
			)}
		</>
	);
};

export default memo(GamePage);
