import '../styles/style.scss';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../menu/components/Menu';
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

const MainPage = () => {
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

export default memo(MainPage);
