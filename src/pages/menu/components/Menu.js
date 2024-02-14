import '../styles/style.scss';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import logo from '../../../images/illustrations/logo.svg';
import classNames from 'classnames';
import Socials from '../../../components/socials/Socials';
import Spiral from '../../../images/illustrations/spiral';
import Labyrinth from '../../../images/illustrations/labyrinth';

const Menu = ({}) => {
	const [active, setActive] = useState(false);

	const handleSwitchMenu = () => {
		setActive((prevState) => !prevState);
	};

	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		if (active) {
			html.classList.add('mobile-menu-active');
			return;
		}
		html.classList.remove('mobile-menu-active');
	}, [active]);

	return (
		<header className={classNames('menu', { active })}>
			<div className="container menu-main">
				<img src={logo} alt="logo" className="menu-logo" width="48" height="48" />
				<nav className="menu-nav">
					<Spiral className="hide-s hide-m hide-l" />
					<Labyrinth className="hide-s hide-m hide-l" />
					<a className="menu-nav-btn">О игре</a>
					<a className="menu-nav-btn">Темы</a>
					<a className="menu-nav-btn">Запросы</a>
					<a className="menu-nav-btn">Форматы</a>
					<a className="menu-nav-btn">Создатели</a>
					<Socials className="large deco-line hide-s hide-m hide-l" />
					<span className="divider hide-s hide-m hide-l" />
					<Button
						title="Форма обратной связи"
						className="white form-btn hide-s hide-m hide-l"
					/>
				</nav>
				<button
					className={classNames('nav-btn hamburger hide-s hide-m hide-l', {
						active,
					})}
					onClick={handleSwitchMenu}
				>
					<span className="top-line" />
					<span className="mid-line" />
					<span className="bot-line" />
				</button>
			</div>
		</header>
	);
};

Menu.propTypes = {
	// loading: PropTypes.bool.isRequired,
	// signInActions: PropTypes.object.isRequired,
};

// const mapStateToProps = ({ mainPageReducer }) => ({
// 	// loading: state.mainPageReducer.loading,
// 	// isCreateListModal: state.menuReducer.isCreateListModal,
// 	// isJoinListModal: state.menuReducer.isJoinListModal,
// });
//
// const mapDispatchToProps = {
// 	// logOut: menuActions.logOut,
// 	// toggleCreateListModal: menuActions.toggleCreateListModal,
// 	// toggleJoinListModal: menuActions.toggleJoinListModal,
// 	// createList: menuActions.createList,
// 	// joinList: menuActions.joinList,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Menu);
export default memo(Menu);
