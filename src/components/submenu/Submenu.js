import './submenu.scss';
import React, { useState, memo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import SubmenuItem from './SubmenuItem';
import { useRouteMatch } from 'react-router-dom';

const Submenu = ({ menuItems = [], focusItemIndex, onChange, className, customBtnWrap }) => {
	const {
		params: { tab },
	} = useRouteMatch();

	const submenu = useRef();
	const submenuItems = useRef();
	const swiper = useRef(null);

	const [activeItemIndex, setActiveItemIndex] = useState(focusItemIndex);
	const [left, setLeft] = useState();
	const [width, setWidth] = useState();

	useEffect(() => {
		if (focusItemIndex !== activeItemIndex) setActiveItemIndex(focusItemIndex);
	}, [focusItemIndex]);

	useEffect(() => {
		initiateSwiper();
	}, [menuItems, submenuItems]);

	useEffect(() => {
		const tabVal = tab || '';
		const activeItem = menuItems.find((item) => item.value === tabVal);

		onChange(activeItem ? activeItem.index : 0);
	}, [tab, menuItems]);

	useEffect(() => {
		window.addEventListener('resize', initiateSwiper);

		return () => {
			window.removeEventListener('resize', initiateSwiper);
		};
	}, []);

	const initiateSwiper = () => {
		const submenuNode = submenu.current;
		const submenuItemsNode = submenuItems.current;

		if (
			menuItems.length &&
			submenuNode &&
			submenuItemsNode &&
			submenuNode.offsetWidth < submenuItemsNode.offsetWidth
		) {
			swiper.current = new Swiper(submenuNode, {
				slidesPerView: 'auto',
				spaceBetween: 0,
				containerModifierClass: 'swiper-',
			});
		} else if (swiper.current) {
			swiper.current.destroy(true, true);
			swiper.current = null;
		}
	};

	return (
		<div ref={submenu} className={classNames('submenu', className)}>
			<div ref={submenuItems} className="submenu-items swiper-wrapper">
				{menuItems.map(
					({
						title,
						index,
						notificationCount,
						notificationPriorityType,
						notificationRegularType,
						link,
					}) => {
						const updateActiveItemIndex = (leftPosition, itemWidth, changeIndex) => {
							setLeft(leftPosition);
							setWidth(itemWidth);
							if (changeIndex) {
								onChange(index, link);
								setActiveItemIndex(index);
							}
						};

						return (
							<SubmenuItem
								key={index}
								activeItem={activeItemIndex === index}
								title={title}
								notificationCount={notificationCount}
								notificationRegularType={notificationRegularType}
								notificationPriorityType={notificationPriorityType}
								updateActiveItemIndex={updateActiveItemIndex}
								width={width}
								left={left}
								dataName={title}
								link={link}
								customBtnWrap={customBtnWrap}
							/>
						);
					},
				)}
			</div>
		</div>
	);
};

Submenu.defaultProps = {
	focusItemIndex: 0,
	onChange: () => {},
};

Submenu.propTypes = {
	menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
	// focusItemIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	className: PropTypes.string,
	onChange: PropTypes.func,
	customBtnWrap: PropTypes.func,
};

export default memo(Submenu);
