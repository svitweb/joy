/* eslint-disable no-shadow */
/* eslint-disable react/jsx-indent */
import './dropdown.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { handleFoldoutView } from './Helper';
import useActiveElement from './useActiveElement';
import Foldout from './foldout/FoldoutOptions';
import Header from './Header';
import Input from '../input/Input';

const Dropdown = ({
	callbackAction,
	children,
	className,
	closeOnSelectItem,
	color,
	customHeader,
	disabled,
	drawerTitle,
	fallbackOption,
	floatingLabel,
	foldoutCustomElements,
	handleStatus,
	hideHeaderIcon,
	hideRightIcon,
	hideSelectedOption,
	label,
	loading,
	menuHeight,
	menuPosition,
	name: dataNameAttribute,
	nested,
	noResultsTitle,
	onActive,
	onChange,
	optionAdditionalLabelKey,
	optionAdditionalSubValueKey,
	optionCallbackKey,
	optionCheckedKey,
	optionTitlePostKey,
	optionDescriptionKey,
	optionDisabledKey,
	optionFlagKey,
	optionFlagProperty,
	optionIconKey,
	optionImageKey,
	optionLabelKey,
	optionSectionBodyKey,
	optionSectionKey,
	optionSubValueKey,
	optionTitleKey,
	optionTypeKey,
	optionValueKey,
	options: initOptions,
	portalSelector,
	positionedContainer,
	resetSelectedValue,
	resetSelectedValueBtnTitle,
	searchFocusOnMount,
	searchPlaceholder,
	sectionTitle,
	selected,
	showDrawer,
	showPlaceholderIcon,
	type,
	value,
	valuePrefix,
	withSearch,
	stopPropagation,
	positioningBottomIfNotFitInTop,
	nestedHeader,
	customValue,
	foldoutClassName,
}) => {
	const isMobileView = window.innerWidth < 768 || showDrawer;
	const node = useRef();
	const dropdownOptions = useRef();

	const [listVisible, setListVisible] = useState(false);

	const [selectValue, setSelectValue] = useState(type === 'multi' ? value || [] : value || null);
	const [searchValue, setSearchValue] = useState('');
	const [options, setOptions] = useState(initOptions);
	const [positionedOnTop, setPositionedTop] = useState(false);
	const [autoFocusOnSearch, setAutoFocusOnSearch] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isDrawerActive, setIsDrawerActive] = useState(false);
	const focusedElement = useActiveElement();

	const isTouchDevice =
		'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

	const optionsMenuHeight = isMobileView ? '80vh' : menuHeight;

	useEffect(() => {
		setSelectValue(type === 'multi' ? value || [] : value || null);
	}, [value]); // keep state and props in sync

	useEffect(() => {
		if (!isMobileView) return;

		if (listVisible) {
			setIsDrawerActive(true);
			setTimeout(() => {
				setIsActive(true);
			}, 100);
		} else {
			setIsActive(false);

			setTimeout(() => {
				setIsDrawerActive(false);
			}, 200);
		}
	}, [listVisible, isMobileView]);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		if (listVisible && searchFocusOnMount && !isTouchDevice)
			setAutoFocusOnSearch(!autoFocusOnSearch);
		if (onActive) onActive(listVisible);
		if (handleStatus) isMobileView ? handleStatus(!listVisible) : handleStatus(true);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [listVisible]);

	useEffect(() => {
		setOptions(initOptions);
	}, [initOptions]);

	//in case stopPropagation was triggered
	useEffect(() => {
		if (
			!(node.current && node.current.contains(focusedElement)) &&
			window.innerWidth > 768 &&
			!showDrawer
		) {
			setListVisible(false);
		}
	}, [focusedElement]);

	useEffect(() => {
		if (searchValue.trim().length) {
			if (nested) {
				const copiedOptions = [...initOptions];
				const filteredData = [];
				copiedOptions.forEach((item) => {
					const nestedResult = item[optionSectionBodyKey].filter((nestedItem) =>
						nestedItem[optionTitleKey]
							.toLowerCase()
							.includes(searchValue.trim().toLowerCase()),
					);

					if (nestedResult.length) {
						filteredData.push({
							[optionValueKey]: item[optionValueKey],
							[optionSectionKey]: item[optionSectionKey],
							[optionSectionBodyKey]: nestedResult,
						});
					}
				});
				setOptions(filteredData);
			} else {
				const copiedOptions = [...initOptions];
				const filteredData = copiedOptions.filter((item) =>
					item[optionTitleKey].toLowerCase().includes(searchValue.trim().toLowerCase()),
				);
				setOptions(filteredData);
			}
		} else {
			setOptions(initOptions);
		}
	}, [searchValue]);

	useEffect(() => {
		if (positionedContainer && listVisible && !isMobileView) {
			const parentEl = positionedContainer.current || positionedContainer;
			const parentElRect = parentEl.getBoundingClientRect();
			const foldoutRect = dropdownOptions.current.getBoundingClientRect();

			setPositionedTop(
				parentElRect.bottom < foldoutRect.bottom &&
					(positioningBottomIfNotFitInTop
						? foldoutRect.top - foldoutRect.height - 40 > parentElRect.top
						: true),
			);
		} else if (positionedContainer && !listVisible && positionedOnTop) setPositionedTop(false);
	}, [listVisible, positionedContainer, dropdownOptions]);

	useEffect(() => {
		setListVisible(false);
	}, [closeOnSelectItem]);

	const handleClickOutside = (e) => {
		const activeDropdownOptions = document.querySelector('.wrts-dropdown-content.active');
		if (
			(node.current &&
				node.current.contains(e.target) &&
				!e.target.classList.contains('wrts-dropdown-options')) ||
			(activeDropdownOptions && activeDropdownOptions.contains(e.target))
		)
			return;

		if (listVisible) setListVisible(false);
	};

	const toggleDropdown = (e) => {
		if (e) {
			if (stopPropagation) e.stopPropagation();
			e.preventDefault();
		}

		setListVisible(!listVisible);
	};

	// eslint-disable-next-line no-shadow
	const handleItem = (item, label, checked) => {
		if (type === 'multi') {
			const newVal = checked
				? selectValue.filter((el) => el[optionValueKey] !== item[optionValueKey])
				: [...selectValue, ...[item]];
			setSelectValue(newVal);
			onChange(newVal);
			return;
		}
		setSelectValue(item);
		onChange(item, label);
		setListVisible(false);
	};

	const handleListVisibility = () => {
		closeOnSelectItem && setListVisible(false);
	};

	const handleCallbackAction = (item) => {
		setListVisible(false);
		callbackAction(item);
	};

	return (
		<div
			ref={node}
			className={classNames(
				'wrts-dropdown',
				{ 'fit-content': type === 'simple' || customHeader },
				{ disabled },
				className,
				{ 'display-drawer': isMobileView },
				{ 'visible-content': listVisible },
			)}
		>
			{customHeader && (
				<div
					className={classNames({ active: listVisible }, { expanded: listVisible })}
					onClick={!disabled ? toggleDropdown : () => {}}
				>
					{customHeader}
				</div>
			)}
			{!customHeader && (
				<Header
					color={color}
					dataNameAttribute={dataNameAttribute}
					expanded={listVisible}
					floatingLabel={floatingLabel}
					handleItem={handleItem}
					headerFlag={selectValue && selectValue[optionFlagKey]}
					headerIcon={selectValue && selectValue[optionIconKey]}
					hideIcon={hideHeaderIcon}
					hideRightIcon={hideRightIcon}
					label={label}
					leftImage={selectValue && selectValue[optionImageKey]}
					loading={loading}
					optionFlagProperty={optionFlagProperty}
					optionTitleKey={optionTitleKey}
					selected={selected}
					selectedSubValue={selectValue && selectValue[optionSubValueKey]}
					selectedValue={
						selectValue &&
						(type === 'multi' ? selectValue : selectValue[optionTitleKey])
					}
					showPlaceholderIcon={showPlaceholderIcon}
					toggleDropdown={toggleDropdown}
					type={type}
					valuePrefix={valuePrefix}
					customValue={customValue}
				/>
			)}
			{handleFoldoutView(
				isMobileView,
				isDrawerActive || isActive,
				<div
					className={classNames('wrts-dropdown-options', foldoutClassName, {
						'active ': isMobileView ? isActive : listVisible,
						'nested-content': nested,
					})}
				>
					<div
						className={classNames('wrts-dropdown-content', {
							'active ': isMobileView ? isActive : listVisible,
							'nested-content': nested,
							'position-left': menuPosition === 'left',
							'position-right': menuPosition === 'right',
							'position-top': menuPosition === 'top' || positionedOnTop,
						})}
						onClick={!withSearch ? handleListVisibility : undefined}
					>
						<div className="header">
							<h4 className="header-title">{drawerTitle}</h4>
							<button
								className="btn-icon-link"
								type="button"
								onClick={toggleDropdown}
							>
								<span className="icon icon-close" />
							</button>
						</div>
						{withSearch && (
							<div className="search-module">
								<Input
									className={classNames({
										'no-results': !options.length && fallbackOption,
									})}
									hideBackBtn
									searchBar={false}
									color="grey"
									onChange={(val) => {
										setSearchValue(val);
									}}
									value={searchValue}
									placeholder={searchPlaceholder}
									autoFocus={searchFocusOnMount ? autoFocusOnSearch : undefined}
									showClearBtn
									type="search"
								/>
							</div>
						)}

						<div
							ref={dropdownOptions}
							className={classNames('body', {
								'no-results': !options.length && fallbackOption,
							})}
						>
							{sectionTitle && (
								<span className="text section-title">{sectionTitle}</span>
							)}
							{resetSelectedValue && (
								<div className="clear-btn-wrap">
									<Button
										className="btn"
										title={resetSelectedValueBtnTitle}
										type="link"
										onClick={resetSelectedValue}
									/>
								</div>
							)}
							{nestedHeader}
							{children || (
								<Foldout
									callbackAction={handleCallbackAction}
									customElements={foldoutCustomElements}
									fallbackOption={fallbackOption}
									handleItem={handleItem}
									hideSelectedOption={hideSelectedOption}
									listVisible={listVisible}
									nested={nested}
									noResultsTitle={noResultsTitle}
									optionAdditionalLabelKey={optionAdditionalLabelKey}
									optionAdditionalSubValueKey={optionAdditionalSubValueKey}
									optionCallbackKey={optionCallbackKey}
									optionCheckedKey={optionCheckedKey}
									optionTitlePostKey={optionTitlePostKey}
									optionDescriptionKey={optionDescriptionKey}
									optionDisabledKey={optionDisabledKey}
									optionFlagKey={optionFlagKey}
									optionFlagProperty={optionFlagProperty}
									optionIconKey={optionIconKey}
									optionImageKey={optionImageKey}
									optionLabelKey={optionLabelKey}
									optionSectionBodyKey={optionSectionBodyKey}
									optionSectionKey={optionSectionKey}
									optionSubValueKey={optionSubValueKey}
									optionTitleKey={optionTitleKey}
									optionTypeKey={optionTypeKey}
									optionValueKey={optionValueKey}
									options={options}
									selectValue={selectValue}
									type={type}
								/>
							)}
						</div>
					</div>
				</div>,
				portalSelector,
			)}
		</div>
	);
};

Dropdown.defaultProps = {
	closeOnSelectItem: true,
	collapsed: false,
	disabled: false,
	hideRightIcon: false,
	hideSelectedOption: false,
	menuHeight: '320px',
	menuPosition: 'right',
	name: '',
	nested: false,
	onChange: () => {},
	optionAdditionalLabelKey: 'additional_label',
	optionCallbackKey: 'unavailability_label',
	optionCheckedKey: 'checked',
	optionDescriptionKey: 'description',
	optionDisabledKey: 'disabled',
	optionFlagKey: 'flag',
	optionFlagProperty: 'flag',
	optionIconKey: 'icon',
	optionImageKey: 'image',
	optionLabelKey: 'label',
	optionSectionBodyKey: 'body',
	optionSectionKey: 'section',
	optionTitleKey: 'title',
	optionTitlePostKey: '',
	optionTypeKey: 'type',
	optionValueKey: 'key',
	options: [],
	positionOnTop: false,
	searchFocusOnMount: false,
	searchPlaceholder: '',
	sectionTitle: '',
	showDrawer: false,
	type: 'form',
	withSearch: false,
	stopPropagation: false,
};

Dropdown.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	closeOnSelectItem: PropTypes.bool,
	color: PropTypes.string,
	customHeader: PropTypes.object,
	disabled: PropTypes.bool,
	drawerTitle: PropTypes.string,
	fallbackOption: PropTypes.arrayOf(PropTypes.object),
	floatingLabel: PropTypes.bool,
	foldoutCustomElements: PropTypes.node,
	hideRightIcon: PropTypes.bool,
	hideSelectedOption: PropTypes.bool,
	label: PropTypes.string,
	loading: PropTypes.bool,
	menuHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	menuPosition: PropTypes.oneOf(['right', 'left']),
	name: PropTypes.string,
	nested: PropTypes.bool,
	onActive: PropTypes.func,
	onChange: PropTypes.func,
	optionAdditionalLabelKey: PropTypes.string,
	optionAdditionalSubValueKey: PropTypes.string,
	optionCheckedKey: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	optionDescriptionKey: PropTypes.string,
	optionFlagKey: PropTypes.string,
	optionIconKey: PropTypes.string,
	optionImageKey: PropTypes.string,
	optionLabelKey: PropTypes.string,
	optionSectionBodyKey: PropTypes.string,
	optionSectionKey: PropTypes.string,
	optionSubValueKey: PropTypes.string,
	optionTitleKey: PropTypes.string,
	optionTitlePostKey: PropTypes.string,
	optionTypeKey: PropTypes.string,
	optionValueKey: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object),
	positionedContainer: PropTypes.node,
	resetSelectedValue: PropTypes.func,
	resetSelectedValueBtnTitle: PropTypes.string,
	searchFocusOnMount: PropTypes.bool,
	searchPlaceholder: PropTypes.string,
	sectionTitle: PropTypes.string,
	showDrawer: PropTypes.bool,
	type: PropTypes.oneOf(['simple', 'form', 'multi']),
	value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
	valuePrefix: PropTypes.string,
	withSearch: PropTypes.bool,
	stopPropagation: PropTypes.bool,
	nestedHeader: PropTypes.node,
	customValue: PropTypes.node,
	foldoutClassName: PropTypes.string,
};

export default Dropdown;
