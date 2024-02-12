import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderFormInput } from '../../components/FormFields';
import { createListValidate } from '../../services/FormValidate.js';
import Button from '../../components/button/Button';

let CreateListModal = ({ handleSubmit, onSubmit, onClose, valid, loading, type }) => {
	const onSubmitForm = ({ name, password }) => onSubmit(name, password);

	return (
		<div className="popup add-edit-popup">
			<div className="popup-backdrop" onClick={onClose} />
			<div className="popup-wrap">
				<Button className="btn-close" iconName="icon-close" onClick={onClose} />
				<form className="auth-page-form">
					<h3 className="popup-title">
						<span className="icon icon-add" />
						<span className="text">
							{type === 'edit' ? 'Edit list' : 'Create list'}
						</span>
					</h3>
					<Field
						name="name"
						type="text"
						component={renderFormInput}
						label="Name"
						floatingLabel
					/>
					<Field
						name="password"
						type="text"
						component={renderFormInput}
						label="Password"
						required
						floatingLabel
					/>
					<div className="btn-group submit-btn-group right">
						<Button
							onClick={loading ? undefined : handleSubmit(onSubmitForm)}
							disabled={!valid}
							loading={loading}
							title="Create list"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

CreateListModal = reduxForm({
	form: 'createList',
	validate: createListValidate,
})(CreateListModal);

export default CreateListModal;
