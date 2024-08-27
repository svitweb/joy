import '../styles/style.scss';
import React, { memo, useRef } from 'react';
import Main from '../sections/Main';
import About from '../sections/About';
import Themes from '../sections/Themes';
import Requests from '../sections/Requests';
import Formats from '../sections/Formats';
import Footer from '../../footer/Footer';
import Contact from '../sections/Contact';
import Managers from '../sections/Managers';
import Packages from '../sections/Packages';
import Responses from '../sections/Responses';
import Topics from '../sections/Topics';
import GameRequestModal from '../../../components/modals/gameRequest/components/GameRequestModal';
import Menu from '../../../components/menu/components/Menu';

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

	const blocks = [b1, b2, b3, b4, b5, b6];

	return (
		<>
			<Menu scrollToRef={scrollToRef} blocks={blocks} />
			<main className="page-content main-page">
				<Main />
				<About blockRef={b1} />
				<Themes blockRef={b2} />
				<Requests />
				<Formats />
				<Topics blockRef={b3} />
				<Responses />
				<Packages blockRef={b4} />
				{/* <Managers blockRef={b5} /> */}
				<Contact blockRef={b6} />
			</main>
			<Footer scrollToRef={scrollToRef} blocks={blocks} />
			<GameRequestModal />
		</>
	);
};

export default memo(MainPage);
