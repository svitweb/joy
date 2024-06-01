import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../Spinner';

const Header = ({
	color,
	dataNameAttribute,
	expanded,
	floatingLabel,
	handleItem,
	headerFlag,
	headerIcon,
	hideIcon,
	hideRightIcon,
	label,
	leftImage,
	loading,
	optionFlagProperty,
	optionTitleKey,
	selected,
	selectedSubValue,
	selectedValue,
	showPlaceholderIcon,
	toggleDropdown,
	type,
	valuePrefix,
	customValue,
}) => {
	const [mouseDown, setMouseDown] = useState(false);

	const onMouseDown = () => {
		setMouseDown(true);
	};

	const onMouseUp = () => {
		setMouseDown(false);
	};

	const onFocus = () => {
		if (!mouseDown) {
			toggleDropdown();
		}
	};

	const handleRemoveItem = (e, item) => {
		e.stopPropagation();
		handleItem(item, null, true);
	};

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div
					className={classNames({
						'wrts-dropdown-form': type === 'form',
						'wrts-dropdown-simple': type === 'simple',
						'wrts-dropdown-form multi': type === 'multi',
						'hide-label':
							type === 'multi'
								? selectedValue && selectedValue.length
								: !floatingLabel && selectedValue,
						'light-grey': color === 'grey',
						selected,
					})}
					data-name={dataNameAttribute}
					onClick={toggleDropdown}
					onFocus={onFocus}
					onMouseUp={onMouseUp}
					onMouseDown={onMouseDown}
					tabIndex={0}
				>
					{type === 'multi' ? (
						selectedValue && selectedValue.length ? (
							selectedValue.map((item) => (
								<div className="multi-item" key={item[optionTitleKey]}>
									<span className="title">{item[optionTitleKey]}</span>
									<button
										type="button"
										className="remove-btn"
										onClick={(e) => handleRemoveItem(e, item)}
									>
										<span className="icon icon-close" />
									</button>
								</div>
							))
						) : (
							<span className="label">{label}</span>
						)
					) : customValue ? (
						customValue
					) : (
						<>
							{!hideIcon && (
								<>
									{leftImage && !headerIcon && !headerFlag && (
										<Avatar image={leftImage} classnameWrap="left-icon" />
									)}
									{headerIcon && (
										<span
											className={classNames('icon', headerIcon, 'left-icon')}
										/>
									)}
									{(headerFlag || (!selectedValue && showPlaceholderIcon)) && (
										<span
											className={classNames(
												optionFlagProperty,
												`${optionFlagProperty}-${headerFlag}`,
												'left-icon',
												{
													'placeholder-icon':
														!selectedValue && showPlaceholderIcon,
												},
											)}
										/>
									)}
								</>
							)}
							{valuePrefix && (
								<span className="title value-prefix hide-xs">{valuePrefix}</span>
							)}
							{selectedValue && <span className="title">{selectedValue}</span>}
							{selectedSubValue && (
								<span className="title sub-title">{selectedSubValue}</span>
							)}
							<span className={classNames('label', { active: selectedValue })}>
								{label}
							</span>
						</>
					)}

					<span
						className={classNames(
							'icon',
							{ 'icon-expand-more': !hideRightIcon },
							'right-icon',
							{ expanded },
						)}
					/>
				</div>
			)}
		</>
	);
};

Header.defaultProps = {
	expanded: false,
	showHeaderIcon: true,
	floatingLabel: false,
	hideIcon: false,
};

Header.propTypes = {
	color: PropTypes.string,
	expanded: PropTypes.bool,
	headerIcon: PropTypes.string,
	showHeaderIcon: PropTypes.bool,
	toggleDropdown: PropTypes.func,
	floatingLabel: PropTypes.bool,
	valuePrefix: PropTypes.string,
};

export default Header;
