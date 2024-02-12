import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderFormInput } from '../../../components/FormFields';
import { signInValidate } from '../../../services/FormValidate.js';
import Button from '../../../components/button/Button';

function SignInForm({ handleSubmit, onSubmit, valid, loading }) {
	const onSubmitForm = ({ email, password }) => onSubmit(email, password);

	return (
		<form className="auth-page-form" onSubmit={handleSubmit(onSubmitForm)}>
			<h1 className="page-title">Login in Playlisted</h1>
			{/*<div className="btn-group social-btn-group wrap">
				<Button
					iconName='icon-social-media instagram'
					className='full-width'
					type='social'
				>
					<div className="text"><span className="hide-xs">auth</span> met Instagram</div>
				</Button>
				<Button
					className='full-width'
					iconName='icon-social-media facebook'
					type='social'
				>
					<div className="text"><span className="hide-xs">auth</span> met Facebook</div>
				</Button>
			</div>*/}
			<Field name="email" type="text" component={renderFormInput} label="E-mail" />
			<Field name="password" type="password" component={renderFormInput} label="Password" />
			<div className="btn-group submit-btn-group right">
				<Button
					onClick={loading ? undefined : handleSubmit(onSubmitForm)}
					type="primary"
					title="Inloggen"
					disabled={!valid}
					loading={loading}
				/>
			</div>
		</form>
	);
}

SignInForm = reduxForm({
	form: 'signInForm',
	validate: signInValidate,
})(SignInForm);

export default SignInForm;
