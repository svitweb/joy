import '../styles/form_section.scss';
import React, { useEffect, useRef, useState } from 'react';
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
import Spiral from '../../../images/illustrations/spiral';
import LabyrinthImg from '../../../images/illustrations/labyrinth';

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
	blockRef,
}) => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [messenger, setMessenger] = useState('');

	return (
		<div ref={blockRef} className="page-section form-section">
			<Spiral />
			<LabyrinthImg />
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
									<FormInput
										label="Ваше Имя"
										value={name}
										floatingLabel
										onChange={(val) => {
											setName(val);
										}}
									/>
								</div>
								<div className="col s-6">
									<FormInput
										label="Номер телефона"
										value={phone}
										floatingLabel
										onChange={(val) => {
											setPhone(val);
										}}
									/>
								</div>
								<div className="col s-6">
									<div className="btn-group">
										<Button
											className="white-border full-width"
											iconName="icon-whatsapp"
											active={messenger === 'whatsapp'}
											onClick={
												messenger === 'whatsapp'
													? undefined
													: () => setMessenger('whatsapp')
											}
										/>
										<Button
											className="white-border full-width"
											iconName="icon-telegram"
											active={messenger === 'telegram'}
											onClick={
												messenger === 'telegram'
													? undefined
													: () => setMessenger('telegram')
											}
										/>
									</div>
								</div>
								<div className="col s-6">
									<Button
										title="Отправить"
										className="full-width submit-btn blue"
									/>
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
