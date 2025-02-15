import '../styles/contact_form_section.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import Spiral from '../../../images/illustrations/spiral';
import LabyrinthImg from '../../../images/illustrations/labyrinth';
import Cookies from 'js-cookie';
import ContactForm from '../forms/ContactForm';
import { useTranslation } from 'react-i18next';

const Contact = ({ contactRequestSubmitted, contactRequestWasSubmitted, blockRef }) => {
	const { t } = useTranslation();

	const contactRequestDone = Cookies.get('contactRequest');

	return (
		<div ref={blockRef} id="contactForm" className="page-section form-section">
			<Spiral />
			<LabyrinthImg />
			<div className="container">
				<div className="row">
					<div className="col s-8 s-offset-2">
						{contactRequestSubmitted || contactRequestWasSubmitted ? (
							<>
								<h2 className="section-title">
									{contactRequestWasSubmitted && !contactRequestSubmitted
										? t('Заявка вже відправлена')
										: t('main_page.contact_form.submit_success.title')}
								</h2>
								<h3 className="subtitle">
									{contactRequestWasSubmitted && !contactRequestSubmitted
										? t('Ви вже надсилали заявку сьогодні')
										: t('main_page.contact_form.submit_success.sub_title')}
									{t('main_page.contact_form.submit_success.sub_title')}
								</h3>
								<p className="desc">
									{contactRequestWasSubmitted && !contactRequestSubmitted
										? t(
												'Наш менеджер зв’яжеться з вами протягом 24 годин. Повторно подати заявку можна завтра.\n' +
													'\n' +
													'Якщо ваше питання термінове, зв’яжіться з нами:\n' +
													'📩 Email: [ваш email]\n' +
													'📞 Телефон: [ваш номер]\n' +
													'💬 Telegram / WhatsApp: [посилання або номер]\n' +
													'\n' +
													'Дякуємо за ваше звернення!',
										  )
										: t('main_page.contact_form.submit_success.description')}
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
	contactRequestWasSubmitted: mainPageReducer.contactRequestWasSubmitted,
});

export default connect(mapStateToProps, null)(memo(Contact));
