import '../styles/packages_section.scss';
import React from 'react';
import PropTypes from 'prop-types';
import * as mainPageActions from '../Actions';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import cry1 from '../../../images/illustrations/crystal-1.svg';
import cry2 from '../../../images/illustrations/crystal-2.svg';

const Packages = ({}) => {
	return (
		<div className="page-section packages-section">
			<div className="container">
				<h2 className="section-title">форматы игры</h2>
				<div className="row">
					<div className="col s-6">
						<div className="package">
							<img src={cry1} alt="illustration" className="package-img" />
							<h3 className="package-title">Индивидуальная игра</h3>
							<p className="package-desc">
								Вы получаете глубокое воздействие, способствующее более эффективному
								росту, осознанию изменениям, учитывая именно ваши цели и стремления.
							</p>
							<span className="package-divider" />
							<ul className="package-usp">
								<li className="package-usp-item">
									Количество игроков: 1-2 человек
								</li>
								<li className="package-usp-item">Длительность: до 2,5 часов</li>
								<li className="package-usp-item">Форма проведения: онлайн</li>
								<li className="package-usp-item">Платформа: Zoom</li>
								<li className="package-usp-item">Стоимость: 80 EUR</li>
							</ul>
							<Button title="Иду на игру" className="package-btn" />
						</div>
					</div>
					<div className="col s-6">
						<div className="package">
							<img src={cry2} alt="illustration" className="package-img" />
							<h3 className="package-title">Групповая игра</h3>
							<p className="package-desc">
								Вы не только индивидуально переосмысливаете свои взгляды, но и
								взаимодействуете с другими игроками, обогащаясь опытом друг друга.
							</p>
							<span className="package-divider" />
							<ul className="package-usp">
								<li className="package-usp-item">
									Количество игроков: 3-7 человек
								</li>
								<li className="package-usp-item">Длительность: до 3,5 часов</li>
								<li className="package-usp-item">Форма проведения: онлайн</li>
								<li className="package-usp-item">Платформа: Zoom</li>
								<li className="package-usp-item">Стоимость: 30 EUR / чел.</li>
							</ul>
							<Button title="Иду на игру" className="package-btn" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Packages.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
