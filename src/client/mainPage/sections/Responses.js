import '../styles/responeses_section.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as gameRequestActions from '../../../components/modals/gameRequest/Actions';
import Button from '../../../components/button/Button';

const Responses = ({ toggleGameRequestModal }) => {
	const { t } = useTranslation();

	return (
		<div className="page-section responses-section">
			<div className="container">
				<h2 className="section-title">{t('main_page.responses.title')}</h2>
				<p className="sup-text">{t('main_page.responses.description')}</p>
				<Button
					title={t('general.request_btn')}
					onClick={() => toggleGameRequestModal({ open: true })}
				/>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	toggleGameRequestModal: gameRequestActions.toggleGameRequestModal,
};

export default connect(null, mapDispatchToProps)(memo(Responses));
