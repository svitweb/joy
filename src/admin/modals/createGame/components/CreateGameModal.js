import React, { useState, useEffect, useMemo, memo } from 'react';
// import { renderFormInput } from '../../../components/FormFields';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as createGameActions from '../Actions';
import Button from '../../../../components/button/Button';
import FormInput from '../../../../components/input/FormInput';
import { clearState, getPlayers } from '../Actions';
import DatePickerField from '../../../../components/datePicker/DatePicker';
import Dropdown from '../../../../components/dropdown/Dropdown';

const CreateGameModal = ({
	open,
	toggleCreateGameModal,
	createGame,
	submitLoading,
	clearState,
	editData,
	getPlayers,
	userData,
	players,
}) => {
	const {
		_id,
		name: gameName,
		startDate: editStartGame,
		players: editPlayers,
		type: editType,
	} = editData || {};
	const { _id: managerId } = userData || {};

	const typeOptions = [
		{
			title: 'Group',
			id: 1,
		},
		{
			title: 'Individual',
			id: 2,
		},
	];

	const [name, setName] = useState(gameName || '');
	const [startDate, setStartDate] = useState(null);
	const [type, setType] = useState(null);
	const [selectedPlayers, setSelectedPlayers] = useState([]);

	const valid = useMemo(() => !!name?.trim() && !!type, [name, type]);

	useEffect(() => {
		if (!open) {
			setName('');
			setSelectedPlayers([]);
			setStartDate(null);
			setType(null);
			clearState();
		}
	}, [open]);

	useEffect(() => {
		if (type?.title) {
			setSelectedPlayers([]);
			getPlayers({ managerId, type: type.title.toLowerCase() });
		}
	}, [type]);

	useEffect(() => {
		if (editData) {
			setName(gameName);
			setStartDate(editStartGame && new Date(editStartGame));
			setSelectedPlayers(editPlayers || []);
			setType(
				typeOptions.find((type) => type.title.toLowerCase() === editType.toLowerCase()),
			);
		}
	}, [editData]);

	const onClose = () => {
		toggleCreateGameModal({ open: false });
	};

	const submitManageGame = () => {
		createGame({
			editId: _id,
			data: { name, startDate, players: selectedPlayers, type: type.title },
		});
	};

	return (
		open && (
			<div className="popup add-edit-popup">
				<div className="popup-backdrop" />
				<div className="popup-wrap">
					<Button className="btn-close" iconName="icon-close" onClick={onClose} />
					<div className="auth-page-form">
						<h3 className="popup-title">
							{/* <span className="icon icon-add" /> */}
							<span className="text">
								{_id ? `Edit ${gameName} game` : 'Create game'}
							</span>
						</h3>
						<FormInput
							floatingLabel
							label="Name"
							onChange={setName}
							type="text"
							value={name}
						/>
						<DatePickerField
							// name={name}
							onChange={setStartDate}
							value={startDate}
							// placeholder={placeholder}
							// className={className}
							// disabled={disabled}
							// timeSelect={timeSelect}
							// startDate={startDate}
						/>
						<div className="form-field">
							<Dropdown
								options={typeOptions}
								optionValueKey="id"
								// optionTitleKey="name"
								value={type}
								label={'Type'}
								onChange={setType}
								floatingLabel
								// type="multi"
								// nested
							/>
							<span className="error-msg">{}</span>
						</div>
						{!!type && <div className="form-field">
							<Dropdown
								options={[
									{
										section: 'Players',
										body: players,
									},
								]}
								optionValueKey="_id"
								optionTitleKey="name"
								value={selectedPlayers}
								label={'Players'}
								onChange={setSelectedPlayers}
								floatingLabel
								type="multi"
								nested
							/>
							<span className="error-msg">{}</span>
						</div>}
						<div className="btn-group submit-btn-group right">
							<Button
								onClick={submitManageGame}
								disabled={!valid}
								loading={submitLoading}
								title={_id ? 'Edit' : 'Create'}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

const mapStateToProps = ({ createGameReducer, signInReducer }) => ({
	open: createGameReducer.open,
	submitLoading: createGameReducer.submitLoading,
	editData: createGameReducer.editData,
	players: createGameReducer.players,
	userData: signInReducer.userData,
});

const mapDispatchToProps = {
	toggleCreateGameModal: createGameActions.toggleCreateGameModal,
	createGame: createGameActions.createGame,
	getPlayers: createGameActions.getPlayers,
	clearState: createGameActions.clearState,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(CreateGameModal);
