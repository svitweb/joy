import '../styles/style.scss';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';
import logo from '../../../images/illustrations/logo.svg';
import classNames from 'classnames';
import Socials from '../../../components/socials/Socials';
import Spiral from '../../../images/illustrations/spiral';
import Labyrinth from '../../../images/illustrations/labyrinth';

const Menu = ({ scrollToRef, blocks }) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		if (active) {
			html.classList.add('mobile-menu-active');
			return;
		}
		html.classList.remove('mobile-menu-active');
	}, [active]);

	const handleSwitchMenu = () => {
		setActive((prevState) => !prevState);
	};

	const handleNavigate = (block) => {
		if (block) scrollToRef(block);
		setActive(false);
	};

	return (
		<header className={classNames('menu', { active })}>
			<div className="container menu-main">
				<img src={logo} alt="logo" className="menu-logo" width="48" height="48" />
				<nav className="menu-nav">
					<Spiral className="hide-s hide-m hide-l" />
					<Labyrinth className="hide-s hide-m hide-l" />
					<button onClick={() => handleNavigate(blocks[0])} className="menu-nav-btn">
						О игре
					</button>
					<button onClick={() => handleNavigate(blocks[1])} className="menu-nav-btn">
						Темы
					</button>
					<button onClick={() => handleNavigate(blocks[2])} className="menu-nav-btn">
						Запросы
					</button>
					<button onClick={() => handleNavigate(blocks[3])} className="menu-nav-btn">
						Форматы
					</button>
					<button onClick={() => handleNavigate(blocks[4])} className="menu-nav-btn">
						Создатели
					</button>
					<Socials className="large deco-line hide-s hide-m hide-l" />
					<span className="divider hide-s hide-m hide-l" />
					<Button
						title="Форма обратной связи"
						className="white form-btn hide-s hide-m hide-l"
						onClick={() => handleNavigate(blocks[5])}
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
