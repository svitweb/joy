import '../styles/requests_section.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../../../services/Constants';
import * as gameRequestActions from '../../../components/modals/gameRequest/Actions';
import wayImg from '../../../images/illustrations/way.png';
import Button from '../../../components/button/Button';

const Requests = ({ blockRef, toggleGameRequestModal }) => {
	const { t } = useTranslation();

	return (
		<div ref={blockRef} className="page-section requests-section">
			<div className="container">
				<h2 className="section-title">{t('main_page.requests.title')}</h2>
				<div className="row">
					<div className="col s-6">
						<p className="desc">
							{t('main_page.requests.description_1', { brandName: BRAND_NAME })}
						</p>
						<p className="desc">{t('main_page.requests.description_2')}</p>
						<div className="btn-group">
							<Button
								title={t('main_page.requests.btn')}
								onClick={() => toggleGameRequestModal({ open: true })}
							/>
						</div>
					</div>
					<div className="col s-6">
						<div className="img-wrap">
							<img src={wayImg} alt="illustration" className="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	toggleGameRequestModal: gameRequestActions.toggleGameRequestModal,
};

export default connect(null, mapDispatchToProps)(memo(Requests));
