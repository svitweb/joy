import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import FoldoutItem from './FoldoutItem';

const FoldoutOptions = ({
	customElements,
	fallbackOption,
	nested,
	noResultsTitle,
	optionSectionBodyKey,
	optionSectionKey,
	options,
	...rest
}) => {
	return (
		<>
			{!options.length ? (
				<>
					<section className={classNames('no-results', { fallback: fallbackOption })}>
						<span className="info">{noResultsTitle}</span>
					</section>
					{fallbackOption && <FoldoutItem {...rest} item={fallbackOption} />}
				</>
			) : (
				<>
					{options.map((item, index) => {
						return (
							<div key={index} className={classNames('section', { nested })}>
								{nested ? (
									<>
										{item[optionSectionKey] && (
											<h5 className="section-title">
												{item[optionSectionKey]}
											</h5>
										)}
										{item[optionSectionBodyKey].map((row, rowIndex) => {
											return (
												<FoldoutItem {...rest} key={rowIndex} item={row} />
											);
										})}
									</>
								) : (
									<FoldoutItem {...rest} item={item} />
								)}
							</div>
						);
					})}
					{customElements}
				</>
			)}
		</>
	);
};

FoldoutOptions.defaultProps = {
	noResultsTitle: 'No results found!',
};

FoldoutOptions.propTypes = {
	customElements: PropTypes.node,
	nested: PropTypes.bool,
	optionSectionBodyKey: PropTypes.string,
	optionSectionKey: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object),
};

export default memo(FoldoutOptions);
