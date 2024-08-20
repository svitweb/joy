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
	const { selectedCards = [] } = gameData || {};

	const swiperRef = useRef();

	useEffect(() => {
		if (swiperRef.current) swiperRef.current.slideTo(selectedCards.length - 1);
	}, [gameData]);

	const handleClickOnCard = (cardData) => {
		console.log('-------CARD', cardData);

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

	return (
		<aside className="cards-menu">
			<div className="container">
				<div className="meta-cards">
					<img
						className="cards"
						src={metaCardsImg}
						alt="meta"
						onClick={handleClickOnMetaCards}
					/>
				</div>
				<Swiper
					className="cards-menu-list"
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
					spaceBetween={-6}
					swiperRef={swiperRef}
				/>
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
