import '../styles/requests_section.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as mainPageActions from '../Actions';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import wayImg from '../../../images/illustrations/way.png';

const Requests = ({}) => {
	return (
		<div className="page-section requests-section">
			<div className="container">
				<h2 className="section-title">путь к себе</h2>
				<div className="row">
					<div className="col s-6">
						<p className="desc">
							Игра UPGRADE способствует достижению твоих целей, помогая увидеть страхи
							и убеждения, ограничивающие тебя.
						</p>
						<p className="desc">
							Предоставляя возможность через игровой процесс выйти за пределы
							привычного и найти нестандартные решения, новые идеи и возможности.
						</p>
						<div className="btn-group">
							<Button title="Хочу на игру" />
						</div>
					</div>
					<div className="col s-6">
						<div className="img-wrap">
							<img src={wayImg} alt="illustration" className="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Requests.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
