import '../styles/style.scss';
import React, { memo, useRef, lazy, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const Main = lazy(() => import('../sections/Main'));
const About = lazy(() => import('../sections/About'));
const Themes = lazy(() => import('../sections/Themes'));
const Requests = lazy(() => import('../sections/Requests'));
const Formats = lazy(() => import('../sections/Formats'));
const Contact = lazy(() => import('../sections/Contact'));
const Packages = lazy(() => import('../sections/Packages'));
const Responses = lazy(() => import('../sections/Responses'));
const Topics = lazy(() => import('../sections/Topics'));
const Footer = lazy(() => import('../../footer/Footer'));
const GameRequestModal = lazy(() =>
	import('../../../components/modals/gameRequest/components/GameRequestModal'),
);
const Menu = lazy(() => import('../../../components/menu/components/Menu'));
// import Managers from '../sections/Managers';

const MainPage = () => {
	const history = useHistory();

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

	const location = useLocation();

	useEffect(() => {
		if (location.state?.scrollTo) {
			const element = document.getElementById(location.state.scrollTo);
			if (element) {
				element.scrollIntoView({ behavior: 'auto' });
			}
			history.replace({ pathname: location.pathname, state: {} });
		}
	}, [location]);

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
