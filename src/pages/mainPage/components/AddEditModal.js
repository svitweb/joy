import React from 'react';
import { Field, isDirty, reduxForm } from 'redux-form';
import { renderFormInput } from '../../../components/FormFields';
import { createListValidate } from '../../../services/FormValidate.js';
import Button from '../../../components/button/Button';
import { connect } from 'react-redux';

let AddEditModal = ({ handleSubmit, onSubmit, onClose, valid, dirty, loading, listId }) => {
	const onSubmitForm = ({ name, password }) => onSubmit(name, password, listId);
	return (
		<div className="popup add-edit-popup">
			<div className="popup-backdrop" onClick={onClose} />
			<div className="popup-wrap">
				<Button className="btn-close" iconName="icon-close" onClick={onClose} />
				<form className="auth-page-form" onSubmit={handleSubmit(onSubmitForm)}>
					<h3 className="popup-title">
						<span className="icon icon-add" />
						<span className="text">Edit list</span>
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
						floatingLabel
					/>
					<div className="btn-group submit-btn-group right">
						<Button
							// onClick={handleSubmit(onSubmitForm)}
							disabled={!valid || !dirty}
							loading={loading}
							title="Edit list"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

AddEditModal = reduxForm({
	form: 'editList',
	validate: createListValidate,
	enableReinitialize: true,
})(AddEditModal);

function mapStateToProps(state) {
	const { name, password, listId } = state.mainPageReducer.editListData;
	return {
		initialValues: {
			name,
			password,
		},
		dirty: isDirty('editList')(state),
		listId,
	};
}

export default connect(mapStateToProps, null)(AddEditModal);
