import './styles/contentItem.scss';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTheme } from "../../themeProvider/ThemeProvider";

const ContentItem = ({ active, cover, description, title }) => {
	const { theme } = useTheme();

	return (
		<div className={classNames('wrts-content-item', { active }, theme)}>
			<div className="content-cover" style={{ backgroundImage: `url(${cover})` }} />
			<div className="content-title-block">
				<h5 className="content-title">{title}</h5>
				<span className="content-description">{description}</span>
			</div>
			<span className='icon icon-check content-check' />
		</div>
	);
};

ContentItem.propTypes = {
	active: PropTypes.bool,
	cover: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
};

export default memo(ContentItem);
