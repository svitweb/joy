import '../styles/topics_section.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as mainPageActions from '../Actions';
import { connect } from 'react-redux';
import Swiper from 'swiper';
import Spiral from '../../../images/illustrations/spiral';
import Labyrinth from '../../../images/illustrations/labyrinth';

const Topics = () => {
	const submenu = useRef(null);
	const submenuItems = useRef(null);
	const swiper = useRef(null);

	useEffect(() => {
		window.addEventListener('resize', initiateSwiper);
		initiateSwiper();

		return () => {
			window.removeEventListener('resize', initiateSwiper);
		};
	}, []);

	const initiateSwiper = () => {
		const submenuNode = submenu.current;

		if (window.innerWidth < 1024) {
			swiper.current = new Swiper(submenuNode, {
				slidesPerView: 'auto',
				containerModifierClass: 'swiper-',
			});
		} else if (swiper.current?.initialized) {
			swiper.current.destroy(true, true);
		}
	};

	const gameRequests = [
		'- Хочу раскрыть свой потенциал:\n Как могу развивать свои сильные стороны?',

		'- Хочу достичь успеха:\n В каком направлении двигаться, чтобы успешно продвигаться\n в жизни?',

		'- Хочу подняться финансово:\n Каким образом можно улучшить свою финансовую ситуацию?',

		'- Хочу улучшить отношения:\n Как создать гармонию в семье или найти подходящего партнера?',

		'- Хочу радость и яркость жизни:\n Что может приносить радость\n и как ее обрести?',

		'- Хочу добиваться желаемого:\n Как проявляться в мир для достижения целей?',

		'- Хочу найти свое призвание:\n Как определить, чем стоит заниматься для получения удовлетворения?',

		'- Хочу принимать верные решения: Как разрабатывать стратегии для достижения желаемого результата?',
	];

	return (
		<div className="page-section topics-section">
			<Spiral className="hide-xs hide-s hide-m" />
			<Labyrinth className="hide-xs hide-s hide-m" />
			<div className="container">
				<h2 className="section-title">запросы на игру</h2>
				<p className="subtitle">Популярные запросы, с которыми приходят на игру:</p>
				<div ref={submenu} className="swiper-container">
					<div ref={submenuItems} className="row swiper-wrapper">
						{gameRequests.map((el, index) => (
							<div className="col m-6 swiper-slide">
								<div className="topic">
									<span className="topic-name">{el}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

Topics.propTypes = {
	loading: PropTypes.bool.isRequired,
	playLists: PropTypes.object,
};

const mapStateToProps = ({ mainPageReducer }) => ({
	loading: mainPageReducer.loading,
	playLists: mainPageReducer.lists,
	isAddListModal: mainPageReducer.isAddListModal,
});

const mapDispatchToProps = {
	getList: mainPageActions.getList,
	editListInit: mainPageActions.editListInit,
	editList: mainPageActions.editList,
	deleteList: mainPageActions.deleteList,
	toggleAddListModal: mainPageActions.toggleEditListModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
