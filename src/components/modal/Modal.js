import './modal.scss';
import React, { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Modal = ({
	className,
	children,
	isOpen,
	onClose,
	title,
	preventOutsideClose,
	customHeader,
}) => {
	const modalNode = useRef();

	const [opened, setOpened] = useState(false);
	const [activate, setActivate] = useState(false);

	useEffect(() => {
		isOpen && document.addEventListener('mousedown', handleClickOutside);

		if (isOpen) {
			setOpened(true);
			setTimeout(() => {
				setActivate(isOpen);
			}, 100);
		} else {
			setActivate(false);

			setTimeout(() => {
				setOpened(false);
			}, 200);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		document.addEventListener('keydown', closeModal, false);

		return () => {
			document.removeEventListener('keydown', closeModal);
		};
	}, [isOpen]);

	const closeModal = (e) => {
		if (e.key === 'Escape' && onClose && isOpen) onClose();
	};

	const handleClickOutside = (e) => {
		if (preventOutsideClose) return;
		const hasActiveDropdown = document.getElementsByClassName('dropdown-options-wrap active');
		const { current: modalBodyEl } = modalNode || {};

		if (
			(isOpen && modalBodyEl && modalBodyEl.contains(e.target)) ||
			(modalBodyEl && modalBodyEl.classList.contains('dropdown')) ||
			hasActiveDropdown.length
		) {
			return;
		}
		onClose && onClose();
	};

	return (
		opened && (
			<div
				className={classNames(
					'modal',
					{
						active: activate,
					},
					className,
				)}
			>
				<div className="modal-wrap" ref={modalNode}>
					<header className="modal-header">
						{title && <h2 className="modal-title">{title}</h2>}
						{customHeader}
						{onClose && (
							<button className="close" onClick={onClose} type="button">
								<span className="icon icon-close" />
							</button>
						)}
					</header>
					<div className="modal-body">{children}</div>
				</div>
			</div>
		)
	);
};

Modal.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	preventOutsideClose: PropTypes.bool,
	customHeader: PropTypes.node,
};

export default memo(Modal);
