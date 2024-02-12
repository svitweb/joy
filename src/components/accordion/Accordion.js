import './accordion.scss';
import React, { useState, memo, forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Accordion = forwardRef(
	(
		{
			section,
			content,
			className,
			disabled,
			onClick,
			disabledAction,
			headerClassName,
			bodyClassName,
			bordered,
		},
		ref,
	) => {
		const accordionBody = useRef();
		const [expandAccordion, setExpandAccordion] = useState(false);
		const [expandAccordionDone, setExpandAccordionDone] = useState(false);

		useImperativeHandle(ref, () => ({
			toggleAccordion(state, noAnimation) {
				toggleAccordion(state, noAnimation);
			},
			getExpandState() {
				return expandAccordion;
			},
		}));

		const toggleAccordion = (state, noAnimation) => {
			const { current } = accordionBody;

			if (current) {
				if (noAnimation) current.style.transition = 'none';

				current.style.maxHeight = `${current.scrollHeight}px`;

				setTimeout(() => {
					!state && (current.style.maxHeight = 0);
				});

				setExpandAccordion(state);

				!state && setExpandAccordionDone(state);

				setTimeout(() => {
					current.removeAttribute('style');
					setExpandAccordionDone(state);
				}, 200);
			}

			onClick && !expandAccordion && onClick();
		};

		return (
			<div className={classNames('accordion', { disabled, bordered }, className)}>
				<div
					className={classNames('accordion-btn', headerClassName, {
						active: expandAccordion,
					})}
					onClick={
						!disabled && !disabledAction
							? () => toggleAccordion(!expandAccordion)
							: () => {}
					}
				>
					{section}
				</div>
				<div
					ref={accordionBody}
					className={classNames('accordion-body', bodyClassName, {
						active: expandAccordionDone,
					})}
				>
					<div className="accordion-content">{content}</div>
				</div>
			</div>
		);
	},
);

Accordion.defaultProps = {
	onClick: () => {},
};

Accordion.propTypes = {
	section: PropTypes.object,
	content: PropTypes.object,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	disabledAction: PropTypes.bool,
	bordered: PropTypes.bool,
	headerClassName: PropTypes.string,
	bodyClassName: PropTypes.string,
};

export default memo(Accordion);
