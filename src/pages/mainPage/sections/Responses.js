import '../styles/responeses_section.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as mainPageActions from '../Actions';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';

const Responses = ({}) => {
	return (
		<div className="page-section responses-section">
			<div className="container">
				<h2 className="section-title">Что Вы получите в результате прохождения игры?</h2>
				<p className="sup-text">
					Вы погрузитесь в захватывающий мир игры UPGRADE, где каждый шаг активирует ваши
					размышления, переворачивает привычные представления и открывает новые горизонты
					в восприятии и реализации возможностей.
				</p>
				<Button title="Оставить заявку" />
			</div>
		</div>
	);
};

Responses.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Responses);
