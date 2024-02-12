// import Validator from 'validator';

export const createListValidate = values => {
	const errors = {};

	!values.name && (errors.name = 'Please enter name');
	!values.password && (errors.password = 'Please enter password');

	return errors;
};

export const joinListValidate = values => {
	const errors = {};

	!values.password && (errors.password = 'Please enter password');

	return errors;
};