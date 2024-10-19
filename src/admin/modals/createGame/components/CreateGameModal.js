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
	const { _id, name: gameName, startDate: editStartGame, players: editPlayers } = editData || {};
	const { _id: managerId } = userData || {};

	const [name, setName] = useState(gameName || '');
	const [startDate, setStartDate] = useState(null);
	const [selectedPlayers, setSelectedPlayers] = useState([]);

	const valid = useMemo(() => name?.trim(), [name]);

	useEffect(() => {
		if (open) {
			getPlayers({ managerId });
		} else {
			setName('');
			setSelectedPlayers([]);
			setStartDate(null);
			clearState();
		}
	}, [open]);

	useEffect(() => {
		if (editData) {
			setName(gameName);
			setStartDate(editStartGame && new Date(editStartGame));
			setSelectedPlayers(editPlayers || []);
		}
	}, [editData]);

	const onClose = () => {
		toggleCreateGameModal({ open: false });
	};

	const submitManageGame = () => {
		createGame({
			editId: _id,
			data: { name, startDate, players: selectedPlayers },
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
