import '../styles/request_card.scss';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Label from '../../components/label/Label';
import Dropdown from '../../components/dropdown/Dropdown';
import Button from '../../components/button/Button';
import * as adminActions from '../Actions';

const RequestCard = ({ data, managers, connectManager, isAdmin }) => {
	const { _id, name, phone, email, package: gamePackage, manager } = data || {};
	const { _id: managerId, name: managerName } = manager || {};

	const [selectedManager, setSelectedManager] = useState(manager);

	const handleConnectManager = () => {
		connectManager({ id: _id, managerId: selectedManager._id, isManager: !!managerId });
	};

	return (
		<div className="request-card">
			<div className="row middle-xs">
				<div className="col m-4 title-col">
					<Label
						title={gamePackage}
						color={gamePackage === 'group' ? 'blue' : undefined}
					/>
					<h4 className="title">{name}</h4>
				</div>
				<div className="col m-2">
					<div className="info">{phone}</div>
				</div>
				<div className="col m-3">
					<div className="info">{email}</div>
				</div>
				<div className="col m-3">
					{isAdmin && (
						<div className="actions">
							<Dropdown
								options={managers}
								optionTitleKey="name"
								value={manager}
								label={selectedManager ? 'Manager:' : 'Select manager'}
								onChange={setSelectedManager}
								floatingLabel
								drawerTitle="Select manager"
								small
							/>
							{!!selectedManager && managerId !== selectedManager._id && (
								<Button
									type="icon"
									iconName="icon-add"
									onClick={handleConnectManager}
								/>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ adminReducer }) => ({
	managers: adminReducer.managers,
});

const mapDispatchToProps = {
	connectManager: adminActions.connectManager,
	// getManagers: adminActions.getManagers,
	//
	// removeGame: adminActions.removeGame,
	// removeCode: adminActions.removeCode,
	// toggleCreateGameModal: createGameActions.toggleCreateGameModal,
	// toggleConnectEmailModal: connectEmailActions.toggleConnectEmailModal,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(RequestCard);
