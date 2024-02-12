import '../styles/form_section.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as mainPageActions from '../Actions';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import Menu from '../../menu/components/Menu';
import listImg1 from '../../../images/illustrations/list-img-1.png';
import listImg2 from '../../../images/illustrations/list-img-2.png';
import listImg3 from '../../../images/illustrations/list-img-3.png';
import listImg4 from '../../../images/illustrations/list-img-4.png';
import wayImg from '../../../images/illustrations/way.png';
import themeImg1 from '../../../images/illustrations/theme-img-1.png';
import themeImg2 from '../../../images/illustrations/theme-img-2.png';
import themeImg3 from '../../../images/illustrations/theme-img-3.png';
import cry1 from '../../../images/illustrations/crystal-1.svg';
import cry2 from '../../../images/illustrations/crystal-2.svg';
import m1 from '../../../images/illustrations/m-1.png';
import m2 from '../../../images/illustrations/m-2.png';
import logoFull from '../../../images/illustrations/logo-full.svg';
import classNames from 'classnames';
import Swiper from 'swiper';
import Input from '../../../components/input/Input';
import Main from '../sections/Main';
import About from '../sections/About';
import Themes from '../sections/Themes';
import Requests from '../sections/Requests';
import Formats from '../sections/Formats';
import Footer from '../../footer/Footer';
import FormInput from '../../../components/input/FormInput';

const Form = ({
	loading,
	getList,
	editListInit,
	editList,
	deleteList,
	playLists,
	history,
	isAddListModal,
	toggleAddListModal,
}) => {
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

		if (window.innerWidth < 768) {
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
		<div className="page-section form-section">
			<div className="container">
				<div className="row">
					<div className="col s-8 s-offset-2">
						<h2 className="section-title">Появились вопросы?</h2>
						<h3 className="subtitle">Мы с радостью ответим на них!</h3>
						<p className="desc">
							Пожалуйста, оставьте свои контакты и выберите удобный для Вас месенджер.
						</p>
						<form>
							<div className="row">
								<div className="col s-6">
									<FormInput label="Ваше Имя" value="df" floatingLabel />
								</div>
								<div className="col s-6">
									<FormInput label="Номер телефона" value="" floatingLabel />
								</div>
								<div className="col s-6">
									<div className="btn-group">
										<Button
											className="white-border full-width"
											// type="icon"
											iconName="icon-whatsapp"
										/>
										<Button
											className="white-border full-width"
											// type="icon-link"
											iconName="icon-telegram"
										/>
									</div>
								</div>
								<div className="col s-6">
									<Button title="Отправить" className="full-width submit-btn" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

Form.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
