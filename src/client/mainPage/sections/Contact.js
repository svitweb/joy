import '../styles/contact_form_section.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import Spiral from '../../../images/illustrations/spiral';
import LabyrinthImg from '../../../images/illustrations/labyrinth';
import Cookies from 'js-cookie';
import ContactForm from '../forms/ContactForm';
import { useTranslation } from 'react-i18next';

const Contact = ({ contactRequestSubmitted, blockRef }) => {
	const { t } = useTranslation();

	const contactRequestDone = Cookies.get('contactRequest') || contactRequestSubmitted;

	return (
		<div ref={blockRef} className="page-section form-section">
			<Spiral />
			<LabyrinthImg />
			<div className="container">
				<div className="row">
					<div className="col s-8 s-offset-2">
						{contactRequestDone ? (
							<>
								<h2 className="section-title">
									{t('main_page.contact_form.submit_success.title')}
								</h2>
								<h3 className="subtitle">
									{t('main_page.contact_form.submit_success.sub_title')}
								</h3>
								<p className="desc">
									{t('main_page.contact_form.submit_success.description')}
								</p>
							</>
						) : (
							<>
								<h2 className="section-title">
									{t('main_page.contact_form.title')}
								</h2>
								<h3 className="subtitle">
									{t('main_page.contact_form.sub_title')}
								</h3>
								<p className="desc">{t('main_page.contact_form.description')}</p>
								<ContactForm />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ mainPageReducer }) => ({
	contactRequestSubmitted: mainPageReducer.contactRequestSubmitted,
});

export default connect(mapStateToProps, null)(memo(Contact));
