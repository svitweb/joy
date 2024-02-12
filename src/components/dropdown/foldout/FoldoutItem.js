import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { Button, RadioCheckbox } from '../../index';
import ContentItem from './ContentItem';

const FoldoutItem = ({
	callbackAction,
	handleItem,
	hideSelectedOption,
	item,
	listVisible,
	optionAdditionalLabelKey,
	optionAdditionalSubValueKey,
	optionCallbackKey,
	optionTitlePostKey,
	optionDescriptionKey,
	optionDisabledKey,
	optionFlagKey,
	optionFlagProperty,
	optionIconKey,
	optionImageKey,
	optionLabelKey,
	optionSubValueKey,
	optionTitleKey,
	optionTypeKey,
	optionValueKey,
	selectValue,
	type,
}) => {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (type === 'multi') {
			setChecked(
				selectValue
					? !!selectValue.find((el) => el[optionValueKey] === item[optionValueKey])
					: false,
			);
		}
	}, [selectValue, item]);

	const hasCallback = item[optionCallbackKey];

	return (
		<div
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				if (hasCallback) callbackAction(item);
				return (
					!item[optionLabelKey] &&
					!item[optionDisabledKey] &&
					listVisible &&
					handleItem(item, null, checked)
				);
			}}
			className={classNames('section-item', {
				disabled: item[optionLabelKey] || item[optionDisabledKey],
			})}
		>
			{type !== 'multi' ? (
				<>
					{(typeof item[optionTypeKey] === 'undefined' ||
						item[optionTypeKey] === 'button') && (
						<Button
							activeDropDownItem={
								selectValue &&
								item[optionValueKey] === selectValue[optionValueKey] &&
								!hideSelectedOption
							}
							additionalSubTitle={item[optionAdditionalSubValueKey]}
							className={item.className}
							dataName={item[optionTitleKey]}
							description={item[optionDescriptionKey]}
							disabled={item[optionDisabledKey]}
							disabledDropdownItem={hasCallback}
							iconClassName={item[optionFlagKey] && optionFlagProperty}
							iconName={!item[optionImageKey] &&
								(item[optionIconKey] || item[optionFlagKey]) &&
								(item[optionIconKey] ||
									(item[optionFlagKey] &&
										`${optionFlagProperty}-${item[optionFlagKey]}`))
							}
							imgSrc={item[optionImageKey]}
							label={item[optionLabelKey] || item[optionAdditionalLabelKey]}
							labelColor={!hasCallback ? 'blue' : undefined}
							subTitle={item[optionSubValueKey]}
							tabIndex={0}
							title={`${item[optionTitleKey]} ${optionTitlePostKey}`}
							type="link"
						/>
					)}
					{item[optionTypeKey] === 'content' && (
						<ContentItem
							active={
								selectValue && item[optionValueKey] === selectValue[optionValueKey]
							}
							cover={item[optionImageKey]}
							description={item[optionDescriptionKey]}
							title={item[optionTitleKey]}
						/>
					)}
				</>
			) : (
				<RadioCheckbox text={item[optionTitleKey]} checked={checked} />
			)}
		</div>
	);
};

FoldoutItem.propTypes = {
	callbackAction: PropTypes.func,
	handleItem: PropTypes.func,
	hideSelectedOption: PropTypes.bool,
	item: PropTypes.object,
	listVisible: PropTypes.bool,
	optionAdditionalLabelKey: PropTypes.string,
	optionAdditionalSubValueKey: PropTypes.string,
	optionCallbackKey: PropTypes.string,
	optionCheckedKey: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	optionTitlePostKey: PropTypes.string,
	optionDescriptionKey: PropTypes.string,
	optionDisabledKey: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	optionFlagKey: PropTypes.string,
	optionFlagProperty: PropTypes.string,
	optionIconKey: PropTypes.string,
	optionImageKey: PropTypes.string,
	optionLabelKey: PropTypes.string,
	optionSubValueKey: PropTypes.string,
	optionTitleKey: PropTypes.string,
	optionTypeKey: PropTypes.string,
	optionValueKey: PropTypes.string,
};

export default memo(FoldoutItem);
