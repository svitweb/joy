import '../styles/style.scss';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import * as gameRequestActions from '../Actions';
import Modal from '../../../modal/Modal';
import Form from './Form';

const GameRequestModal = ({ open, toggleGameRequestModal, clearState, submitted }) => {
	const { t } = useTranslation();

	const formSubmitted = Cookies.get('requestFormSubmitted') || submitted;

	useEffect(() => {
		if (!open) {
			setTimeout(() => {
				clearState();
			}, 200);
		}
	}, [open]);

	return (
		<Modal
			isOpen={open}
			onClose={() => {
				toggleGameRequestModal({ open: false });
			}}
			title={t(`modals.game_request_modal.${formSubmitted ? 'submit_success.' : ''}title`)}
			className={classNames('game-request-modal', { submitted: formSubmitted })}
		>
			{formSubmitted ? (
				<>
					<h3 className="subtitle">
						{t('modals.game_request_modal.submit_success.sub_title')}
					</h3>
					<p className="desc">
						{t('modals.game_request_modal.submit_success.description')}
					</p>
				</>
			) : (
				<>
					<p className="desc">{t('modals.game_request_modal.description')}</p>
					<Form />
				</>
			)}
		</Modal>
	);
};

const mapStateToProps = ({ gameRequestReducer }) => ({
	open: gameRequestReducer.open,
	submitLoading: gameRequestReducer.submitLoading,
	submitted: gameRequestReducer.submitted,
});

const mapDispatchToProps = {
	toggleGameRequestModal: gameRequestActions.toggleGameRequestModal,
	clearState: gameRequestActions.clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(GameRequestModal));
