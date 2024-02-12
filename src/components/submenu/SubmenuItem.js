import React, { useEffect, useRef, memo, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SubmenuItem = ({
	activeItem,
	notificationCount,
	notificationRegularType,
	notificationPriorityType,
	title,
	updateActiveItemIndex,
	left,
	width,
	dataName,
	link,
	customBtnWrap,
}) => {
	const itemNode = useRef(null);

	useEffect(() => {
		activeItem && handleActiveItem(false);
	});

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		if (activeItem) {
			handleActiveItem(false);
		}
	};

	const handleActiveItem = (changeIndex) => {
		const node = itemNode.current;
		if (node) updateActiveItemIndex(node.offsetLeft, node.offsetWidth, changeIndex);
	};

	const btnBody = useMemo(() => {
		return (
			<>
				<span className="text">{title}</span>
				{notificationCount && (
					<span
						className={classNames('wrts-notification-bubble', {
							inactive: !activeItem,
							regular: notificationRegularType,
							priority: notificationPriorityType,
						})}
					>
						{notificationCount}
					</span>
				)}
			</>
		);
	}, [title, activeItem, notificationCount]);

	return (
		<div className={classNames('submenu-item swiper-slide')}>
			<div className="link-wrap" ref={itemNode}>
				{link && customBtnWrap ? (
					customBtnWrap({
						onClick: handleActiveItem,
						className: classNames('submenu-link', { active: activeItem }),
						dataName,
						body: btnBody,
						link,
					})
				) : (
					<button
						className={classNames('submenu-link', { active: activeItem })}
						onClick={handleActiveItem}
						data-name={dataName}
					>
						{btnBody}
					</button>
				)}
			</div>
			<div className="submenu-underline" style={{ left: `${left}px`, width: `${width}px` }} />
		</div>
	);
};

SubmenuItem.defaultProps = {
	dataName: '',
	customBtnWrap: () => {},
};

SubmenuItem.propTypes = {
	activeItem: PropTypes.bool.isRequired,
	notificationCount: PropTypes.number,
	notificationPriorityType: PropTypes.bool,
	title: PropTypes.string,
	updateActiveItemIndex: PropTypes.func.isRequired,
	dataName: PropTypes.string,
	customBtnWrap: PropTypes.func,
};

export default memo(SubmenuItem);
