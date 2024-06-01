import '../styles/main_section.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../../../services/Constants';
import * as gameRequestActions from '../../../components/modals/gameRequest/Actions';
import Button from '../../../components/button/Button';
import Socials from '../../../components/socials/Socials';

const Main = ({ toggleGameRequestModal }) => {
	const { t } = useTranslation();

	return (
		<div className="page-section main-section">
			<div className="main-section-backdrop" />
			<div className="container">
				<h1 className="main-title">{BRAND_NAME}</h1>
				<p className="main-desc">{t('main_page.main_description')}</p>
				<Button
					title={t('general.request_btn')}
					className="main-btn"
					onClick={() => toggleGameRequestModal({ open: true })}
				/>
				<Socials className="deco-line" />
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	toggleGameRequestModal: gameRequestActions.toggleGameRequestModal,
};

export default connect(null, mapDispatchToProps)(memo(Main));
