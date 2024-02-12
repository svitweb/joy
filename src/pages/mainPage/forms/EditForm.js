/* eslint-disable no-func-assign */
import React from 'react';
import { Field, reduxForm, isDirty } from 'redux-form';
import { renderFormInput } from '../../../components/FormFields';
// import { personalInfoValidate } from '../../../../services/FormValidate';
// import Button from '../../../../components/Button';
import { connect } from 'react-redux';
// import * as profileSettingsActions from '../../Actions';

function PersonalInfoForm({
	handleSubmit,
	onSubmit,
	valid,
	loading,
	dirty,
	user_id,
	changePersonalDataRequest
}) {
	const onSubmitForm = ({
		first_name,
		last_name,
		username,
	}) => changePersonalDataRequest(user_id, first_name, last_name, username);

	return (
		<form className="form" onSubmit={handleSubmit(onSubmitForm)}>
			<Field
        name="name"
        type="text"
        component={renderFormInput}
        label="Name"
        floatingLabel
        value={data.name}
			/>
			<Field
				name="last_name"
				type="text"
				component={renderFormInput}
				label="Achternaam"
				floatingLabel
			/>
			<div className="btn-group submit-btn-group">
				<Button
					onClick={loading ? undefined : handleSubmit(onSubmitForm)}
					type="primary"
					title="Wijzigingen opslaan"
					disabled={!valid || !dirty}
					loading={loading}
				/>
			</div>
		</form>
	);
}

PersonalInfoForm = reduxForm({
	form: 'personalInfoForm',
	validate: personalInfoValidate,
	enableReinitialize: true,
})(PersonalInfoForm);

function mapStateToProps(state) {
	const {user_id, first_name, last_name, public_profile_name } = state.sidebarReducer.userData;
	return {
		initialValues: {
			first_name,
			last_name,
			username: public_profile_name,
		},
		dirty: isDirty('personalInfoForm')(state),
		user_id
	};
}

const mapDispatchToProps = {
	changePersonalDataRequest: profileSettingsActions.changePersonalDataRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm);
