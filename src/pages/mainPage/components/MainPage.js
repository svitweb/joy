import '../styles/style.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as mainPageActions from '../Actions';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import Menu from '../../menu/components/Menu';
import AddEditModal from './AddEditModal';
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
import Form from '../sections/Form';
import Managers from '../sections/Managers';
import Packages from '../sections/Packages';
import Responses from '../sections/Responses';
import Topics from '../sections/Topics';

const MainPage = ({
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
	return (
		<>
			<Menu />
			<main className="page-content main-page">
				<Main />
				<About />
				<Themes />
				<Requests />
				<Formats />
				<Topics />
				<Responses />
				<Packages />
				<Managers />
				<Form />
			</main>
			<Footer />
		</>
	);
};

MainPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
