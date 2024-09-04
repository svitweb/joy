import '../styles/cards_menu.scss';
import React, { memo, useEffect, useRef, useState } from 'react';
import Swiper from '../../../components/swiper/Swiper';
import * as cardModalActions from '../../../components/modals/card/Actions';
import { connect } from 'react-redux';
import classNames from 'classnames';
import metaCardsImg from '../images/metaCards.png';
import * as labyrinthQuestionModalActions from '../../../components/modals/labyrinthQuestion/Actions.js';
import * as gameActions from '../Actions.js';
import { getMetaCards, getQuestionsByType } from '../Helpers.js';

const CardsMenu = ({ toggleCardModal, toggleLabyrinthQuestionModal, gameData, changeData }) => {
	const { selectedCards = [], tower } = gameData || {};
	const { active } = tower || {};

	const swiperRef = useRef();
	const cubeScene = useRef();
	const cube = useRef();

	useEffect(() => {
		if (swiperRef.current) swiperRef.current.slideTo(selectedCards.length - 1);
	}, [gameData]);

	const handleClickOnCard = (cardData) => {
		if (cardData.type === 'meta') {
			toggleCardModal({ open: true, type: cardData.type, cardData });
		} else {
			toggleLabyrinthQuestionModal({
				open: true,
				type: cardData.type,
				data: cardData,
			});
		}
	};

	const handleClickOnMetaCards = () => {
		// let labStore = selectedCards.filter((el) => el.type === 'meta') || [];
		//
		// const cards = getMetaCards();
		//
		// if (labStore.length === cards.length) {
		// 	labStore = [];
		// }
		//
		// let cardData;
		//
		// do {
		// 	cardData = cards[Math.floor(Math.random() * cards.length)];
		// } while (labStore.includes(cardData.id));
		//
		// labStore.push(cardData.id);

		// changeData({
		// 	...gameData,
		// 	selectedCards: [...selectedCards, cardData],
		// });

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

	const [cubeActive, setCubeActive] = useState(false);
	const onCubeClick = () => {
		if (cubeActive) {
			setCubeActive(false);
			cube.current.style.animation = 'rotate 15s infinite linear';
			return;
		}
		// Переміщуємо кубик в центр екрану і збільшуємо його
		setCubeActive(true);

		// cubeScene.current.style.top = 'calc(50% - 150px)';
		// cubeScene.current.style.left = 'calc(50% - 150px)';
		// cubeScene.current.style.width = '300px';
		// cubeScene.current.style.height = '300px';

		// Прискорюємо обертання кубика
		cube.current.style.animation = 'rotate .8s infinite linear';

		// Через 2 секунди сповільнюємо обертання і вибираємо випадкове число
		setTimeout(() => {
			// cube.current.style.animation = 'rotate 5s infinite linear';

			// Випадковий вибір грані куба
			const randomFace = Math.floor(Math.random() * 6) + 1;
			cube.current.style.animation = 'none';

			switch (randomFace) {
				case 1:
					cube.current.style.transform = 'rotateX(10deg) rotateY(-10deg)';
					break;
				case 2:
					cube.current.style.transform = 'rotateX(5deg) rotateY(172deg)';
					break;
				case 3:
					cube.current.style.transform = 'rotateX(10deg) rotateY(80deg)';
					break;
				case 4:
					cube.current.style.transform = 'rotateX(8deg) rotateY(-80deg)';
					break;
				case 5:
					cube.current.style.transform = 'rotateX(82deg) rotateY(-1deg) rotateZ(8deg)';
					break;
				case 6:
					cube.current.style.transform = 'rotateX(-82deg) rotateY(0deg) rotateZ(8deg)';
					break;
			}
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
							onClick={onCubeClick}
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
	changeData: gameActions.changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(CardsMenu));
