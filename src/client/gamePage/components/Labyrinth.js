import '../styles/labyrinth.scss';
import React, { memo, useCallback, useEffect, useRef, useState, lazy } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import goldLabImg from '../images/goldLab.png';
import purpleLabImg from '../images/purpleLab.png';
import blueLabImg from '../images/blueLab.png';
import redLabImg from '../images/redLab.png';
import pBg from '../../../images/gameIllustrations/bg/purpleBgOverlay.jpg';
import bBg from '../../../images/gameIllustrations/bg/blueBgOverlay.jpg';
import gBg from '../../../images/gameIllustrations/bg/goldBgOverlay.jpg';
import rBg from '../../../images/gameIllustrations/bg/redBgOverlay.jpg';
import { getQuestionsByType } from '../Helpers';
import * as gameActions from '../Actions';
import * as labyrinthQuestionModalActions from '../../../components/modals/labyrinthQuestion/Actions';
import * as audioVisualizationActions from '../../../components/audioVisualization/Actions';
import { audioVisualizationTypes } from '../../../components/audioVisualization/Constants';
const LabyrinthOverlay = lazy(() => import('./LabyrinthOverlay'));

const Labyrinth = ({
	type,
	toggleLabyrinthQuestionModal,
	changeData,
	disabledParallax,
	gameData = {},
	setAudioVisualization,
}) => {
	const node = useRef();

	const { tower } = gameData;

	const [active, setActive] = useState(false);
	const [focus, setFocus] = useState(false);
	const [treeObjectActive, setTreeObjectActive] = useState(false);
	const [objectMainActive, setObjectMainActive] = useState(false);

	useEffect(() => {
		document.addEventListener('click', clickOutside);

		return () => {
			document.removeEventListener('click', clickOutside);
		};
	}, []);

	const getImgByType = useCallback(() => {
		switch (type) {
			case 'purple':
				return { img: purpleLabImg, bg: pBg };
			case 'blue':
				return { img: blueLabImg, bg: bBg };
			case 'gold':
				return { img: goldLabImg, bg: gBg };
			case 'red':
				return { img: redLabImg, bg: rBg };
			default:
				return { img: purpleLabImg, bg: pBg };
		}
	}, [type]);

	const clickOutside = (e) => {
		setActive(!!node.current?.contains(e.target));
	};

	const handleClickOnLab = () => {
		if (window.innerWidth >= 1200 && !focus) {
			setFocus(true);
			setAudioVisualization({ audioFileName: audioVisualizationTypes.LAB_OPEN });
			return;
		}

		setActive(true);

		let labStore = gameData[`${type}Lab`]?.questions || [];

		const cards = getQuestionsByType(type);

		if (labStore.length === cards.length) {
			labStore = [];
		}

		let cardData;

		do {
			cardData = cards[Math.floor(Math.random() * cards.length)];
		} while (labStore.includes(cardData.id));

		labStore.push(cardData.id);

		changeData({
			...gameData,
			[`${type}Lab`]: { ...gameData[`${type}Lab`], questions: labStore },
		});

		toggleLabyrinthQuestionModal({ open: true, type, data: cardData });
	};

	const handleClickOnObject = (e, objType) => {
		if (window.innerWidth >= 1200 && !focus) {
			setFocus(true);
			setAudioVisualization({ audioFileName: audioVisualizationTypes.LAB_OPEN });
			return;
		}

		e.stopPropagation();
		toggleLabyrinthQuestionModal({ open: true, type, objType });
	};

	return (
		<ParallaxBanner
			className={classNames('parallax-banner', { focus })}
			disabled={disabledParallax && !focus}
		>
			<ParallaxBannerLayer
				image={disabledParallax && !focus ? undefined : getImgByType()?.bg}
				speed={10}
				className="parallax-bg"
				disabled={disabledParallax && !focus}
			/>
			<Parallax
				speed={-20}
				translateY={[30, -30]}
				// scale={[1.2, 0.5, 'easeInQuad']}
				className="labyrinth-section-parallax container"
				disabled={disabledParallax}
			>
				{focus && (
					<button className="back-btn" onClick={() => setFocus(false)}>
						<span className="icon icon-exit" />
					</button>
				)}
				<div className={classNames('labyrinth-section', { hide: tower?.active })}>
					<div ref={node} className={classNames('labyrinth-wrap', type, { active })}>
						<img
							src={getImgByType()?.img}
							className="labyrinth-figure"
							alt="labyrinth"
						/>
						<LabyrinthOverlay type={type} />
						<div
							className={classNames('labyrinth-tree', type)}
							onClick={(e) => handleClickOnObject(e, 'top')}
							onMouseOver={() => setTreeObjectActive(true)}
							onMouseLeave={() => setTreeObjectActive(false)}
						>
							<span
								className={classNames('labyrinth-tree-obj amin-rotate', {
									'on-hover': treeObjectActive,
								})}
							/>
						</div>
						<div
							className={classNames('labyrinth-object', type)}
							onClick={(e) => handleClickOnObject(e, 'main')}
							onMouseOver={() => setObjectMainActive(true)}
							onMouseLeave={() => setObjectMainActive(false)}
						>
							<span
								className={classNames(
									'labyrinth-object-obj amin-rotate main-object',
									{
										'on-hover': objectMainActive,
									},
								)}
							/>
						</div>
						<div
							className={classNames('labyrinth-area', type)}
							onClick={handleClickOnLab}
						/>
					</div>
				</div>
			</Parallax>
		</ParallaxBanner>
	);
};

const mapStateToProps = ({ gamePageReducer }) => ({
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleLabyrinthQuestionModal: labyrinthQuestionModalActions.toggleLabyrinthQuestionModal,
	changeData: gameActions.changeData,
	setAudioVisualization: audioVisualizationActions.setAudioVisualization,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Labyrinth));
