import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../services/Constants';

const HelmetWrapper = ({
	descContent,
	descProps,
	description,
	title,
	titleContent,
	titleProps,
}) => {
	const { t } = useTranslation();

	return (
		<Helmet>
			{(title || titleContent) && (
				<title>
					{titleContent ||
						`${t(title, { brandName: BRAND_NAME, ...titleProps })} | ${BRAND_NAME}`}
				</title>
			)}
			{(description || descContent) && (
				<meta
					name="description"
					content={descContent || t(description, { brandName: BRAND_NAME, ...descProps })}
				/>
			)}
		</Helmet>
	);
};

HelmetWrapper.propTypes = {
	title: PropTypes.string,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	titleProps: PropTypes.object,
	descProps: PropTypes.object,
};

export default memo(HelmetWrapper);
