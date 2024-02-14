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
		`<strong>- Хочу раскрыть свой потенциал:</strong>\n Как могу развивать свои сильные стороны?`,

		'<strong>- Хочу достичь успеха:</strong>\n В каком направлении двигаться, чтобы успешно продвигаться в жизни?',

		'<strong>- Хочу подняться финансово:</strong>\n Каким образом можно улучшить свою финансовую ситуацию?',

		'<strong>- Хочу улучшить отношения:</strong>\n Как создать гармонию в семье или найти подходящего партнера?',

		'<strong>- Хочу радость и яркость жизни:</strong>\n Что может приносить радость и как ее обрести?',

		'<strong>- Хочу добиваться желаемого:</strong>\n Как проявляться в мир для достижения целей?',

		'<strong>- Хочу найти свое призвание:</strong>\n Как определить, чем стоит заниматься для получения удовлетворения?',

		'<strong>- Хочу принимать верные решения:</strong>\n Как разрабатывать стратегии для достижения желаемого результата?',
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
									<span
										className="topic-name"
										dangerouslySetInnerHTML={{ __html: el }}
									/>
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
