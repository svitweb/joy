import '../styles/style.scss';
import React, { memo, useRef } from 'react';
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
	const scrollToRef = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	const b1 = useRef(null);
	const b2 = useRef(null);
	const b3 = useRef(null);
	const b4 = useRef(null);
	const b5 = useRef(null);
	const b6 = useRef(null);

	return (
		<>
			<Menu scrollToRef={scrollToRef} blocks={[b1, b2, b3, b4, b5, b6]} />
			<main className="page-content main-page">
				<Main />
				<About blockRef={b1} />
				<Themes blockRef={b2} />
				<Requests />
				<Formats />
				<Topics blockRef={b3} />
				<Responses />
				<Packages blockRef={b4} />
				<Managers blockRef={b5} />
				<Form blockRef={b6} />
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
