import '../styles/main_section.scss';
import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import Socials from '../../../components/socials/Socials';

const Main = () => {
	return (
		<div className="page-section main-section">
			<div className="container">
				<h1 className="main-title">UPGRADE</h1>
				<p className="main-desc">Трансформируй свое мышление</p>
				<Button title="Оставить заявку" className="main-btn" />
				<Socials className="vertical deco-line" />
			</div>
		</div>
	);
};

Main.propTypes = {
	// loading: PropTypes.bool.isRequired,
	// playLists: PropTypes.object,
};

const mapStateToProps = ({ mainPageReducer }) => ({
	loading: mainPageReducer.loading,
});

const mapDispatchToProps = {
	// getList: mainPageActions.getList,
	// editListInit: mainPageActions.editListInit,
	// editList: mainPageActions.editList,
	// deleteList: mainPageActions.deleteList,
	// toggleAddListModal: mainPageActions.toggleEditListModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Main);
