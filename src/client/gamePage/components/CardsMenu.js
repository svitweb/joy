import '../styles/cards_menu.scss';
import React, { memo, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import metaCardsImg from '../images/metaCards.png';
import { getMetaCards } from '../Helpers.js';
import * as cardModalActions from '../../../components/modals/card/Actions';
import * as labyrinthQuestionModalActions from '../../../components/modals/labyrinthQuestion/Actions.js';
import * as gameActions from '../Actions.js';
import * as towerModalActions from '../../../components/modals/tower/Actions';
import Swiper from '../../../components/swiper/Swiper';

const CardsMenu = ({
	toggleCardModal,
	toggleLabyrinthQuestionModal,
	toggleTowerModal,
	gameData,
	changeData,
}) => {
	const { selectedCards = [], tower } = gameData || {};
	const { active } = tower || {};

	const swiperRef = useRef();
	const cubeScene = useRef();
	const cube = useRef();

	const [cubeActive, setCubeActive] = useState(false);
	const [cubeInProgress, setCubeInProgress] = useState(false);

	useEffect(() => {
		if (swiperRef.current) swiperRef.current.slideTo(selectedCards.length - 1);
	}, [gameData]);

	const handleClickOnCard = (cardData) => {
		if (cardData.type === 'meta') {
			toggleCardModal({ open: true, type: cardData.type, cardData });
			return;
		}

		if (cardData.type === 'response') {
			toggleTowerModal({ open: true });

			return;
		}

		toggleLabyrinthQuestionModal({
			open: true,
			type: cardData.type,
			data: cardData,
		});
	};

	const handleClickOnMetaCards = () => {
		let metaCardsStore = gameData.metaCards || [];

		const cards = getMetaCards();

		if (metaCardsStore.length === cards.length) {
			metaCardsStore = [];
		}

		let cardData;

		do {
			cardData = cards[Math.floor(Math.random() * cards.length)];
		} while (metaCardsStore.includes(cardData.id));

		metaCardsStore.push(cardData.id);

		changeData({
			...gameData,
			metaCards: metaCardsStore,
		});

		toggleCardModal({ open: true, type: cardData.type, cardData });
	};

	const onCubeClick = () => {
		const cubeNode = cube.current;

		if (cubeActive) {
			setCubeActive(false);
			cubeNode.style.animation = 'rotate 15s infinite linear';
			return;
		}

		setCubeInProgress(true);
		setCubeActive(true);

		cubeNode.style.animation = 'rotate .8s infinite linear';

		setTimeout(() => {
			const randomFace = Math.floor(Math.random() * 6) + 1;
			cubeNode.style.animation = 'none';

			switch (randomFace) {
				case 1:
					cubeNode.style.transform = 'rotateX(-5deg) rotateY(-5deg)';
					break;
				case 2:
					cubeNode.style.transform = 'rotateX(-5deg) rotateY(175deg)';
					break;
				case 3:
					cubeNode.style.transform = 'rotateX(-5deg) rotateY(85deg)';
					break;
				case 4:
					cubeNode.style.transform = 'rotateX(-5deg) rotateY(-95deg)';
					break;
				case 5:
					cubeNode.style.transform = 'rotateX(83deg) rotateY(-1deg) rotateZ(5deg)';
					break;
				case 6:
					cubeNode.style.transform = 'rotateX(-95deg) rotateY(-180deg) rotateZ(6deg)';
					break;
			}
			setCubeInProgress(false);
		}, 1500);
	};

	return (
		<aside className="cards-menu">
			<div className="container">
				{!active && (
					<div className="meta-cards">
						<img
							className="cards"
							src={metaCardsImg}
							alt="meta"
							onClick={handleClickOnMetaCards}
						/>
					</div>
				)}
				<div className="cards-menu-list">
					<Swiper
						items={selectedCards.map((card, index) => (
							<div
								key={index}
								className={classNames('menu-card', card.type)}
								onClick={() => handleClickOnCard(card)}
							>
								<div
									className="menu-card-inner"
									style={
										card.type === 'meta'
											? { backgroundImage: `url(${card.img})` }
											: undefined
									}
								/>
							</div>
						))}
						spaceBetween={-14}
						swiperRef={swiperRef}
					/>
				</div>
				{!active && (
					<div className="cube-section">
						<div
							className={classNames('cube-wrap', { active: cubeActive })}
							onClick={cubeInProgress ? undefined : onCubeClick}
						>
							<div
								ref={cubeScene}
								className={classNames('cube-scene', { active: cubeActive })}
							>
								<div ref={cube} className="cube">
									<div className="front">
										<span className="cube-dot" />
									</div>
									<div className="back">
										<span className="cube-dot" />
										<span className="cube-dot" />
									</div>
									<div className="right">
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
									</div>
									<div className="left">
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
									</div>
									<div className="top">
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
									</div>
									<div className="bottom">
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
										<span className="cube-dot" />
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</aside>
	);
};

const mapStateToProps = ({ gamePageReducer }) => ({
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleCardModal: cardModalActions.toggleCardModal,
	toggleLabyrinthQuestionModal: labyrinthQuestionModalActions.toggleLabyrinthQuestionModal,
	toggleTowerModal: towerModalActions.toggleTowerModal,
	changeData: gameActions.changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(CardsMenu));
