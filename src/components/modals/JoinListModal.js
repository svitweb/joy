import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderFormInput } from '../../components/FormFields';
import { joinListValidate } from '../../services/FormValidate.js';
import Button from '../../components/button/Button';

let CreateListModal = ({ handleSubmit, onSubmit, onClose, valid, loading }) => {
	const onSubmitForm = ({ password }) => onSubmit(password);

	return (
		<div className="popup add-edit-popup">
			{/*<div className="popup-backdrop backdrop-img"/>*/}
			<div className="popup-backdrop" onClick={onClose} />
			<div className="popup-wrap">
				<Button className="btn-close" iconName="icon-close" onClick={onClose} />
				<h3 className="popup-title">
					<span className="icon icon-join" />
					<span className="text">Join List</span>
				</h3>
				<form>
					<Field
						name="password"
						type="text"
						component={renderFormInput}
						label="Code"
						floatingLabel
					/>
					<div className="btn-group submit-btn-group right">
						<Button
							onClick={loading ? undefined : handleSubmit(onSubmitForm)}
							disabled={!valid}
							loading={loading}
							title="Join list"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

CreateListModal = reduxForm({
	form: 'joinList',
	validate: joinListValidate,
})(CreateListModal);

export default CreateListModal;
