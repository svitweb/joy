import { createPortal } from 'react-dom';

export const handleFoldoutView = (isMobileView, isVisible, content, portalSelector) =>
	isMobileView ? isVisible && createPortal(content, portalSelector || document.getElementById('root')) : content;
