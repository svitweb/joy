import React, { memo, useEffect, useMemo, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as adminActions from '../../Actions';
import * as createGameActions from '../../modals/createGame/Actions';
import * as connectEmailActions from '../../modals/connectEmail/Actions';
import Button from '../../../components/button/Button';
import Accordion from '../../../components/accordion/Accordion';
import CreateGameModal from '../../modals/createGame/components/CreateGameModal';
import ConnectEmailModal from '../../modals/connectEmail/components/ConnectEmailModal';
import Spinner from '../../../components/Spinner';
import Label from '../../../components/label/Label';
import Dropdown from '../../../components/dropdown/Dropdown';
import RequestCard from '../RequestCard';
import classNames from 'classnames';

const Requests = ({ getRequests, loadingRequests, requests, getManagers, managers, userData }) => {
	const [type, setType] = useState('pending');

	const { _id, name, email, role } = userData || {};

	useEffect(() => {
		return () => setType('pending');
	}, []);

	useEffect(() => {
		if (role === 'admin') getManagers();
	}, [role]);

	useEffect(() => {
		getRequests({ type, managerId: role === 'manager' ? _id : undefined });
	}, [type, role, _id]);

	return (
		<>
			{role === 'admin' && (
				<div className="btn-group">
					<Button
						className={classNames('switch-btn', { active: type === 'pending' })}
						title="Pending"
						onClick={() => setType('pending')}
					/>
					<Button
						className={classNames('switch-btn', { active: type === 'connected' })}
						title="Connected"
						onClick={() => setType('connected')}
					/>
				</div>
			)}
			<section className="admin-section">
				<header className="admin-section-header">{/* <h3>Requests</h3> */}</header>
				{loadingRequests && <Spinner />}
				{!!requests?.length &&
					requests.map((request) => (
						<RequestCard
							isAdmin={role === 'admin'}
							key={request._id}
							data={request}
							managers={managers}
						/>
					))}
			</section>
			<CreateGameModal />
			<ConnectEmailModal />
		</>
	);
};

const mapStateToProps = ({ adminReducer, signInReducer }) => ({
	loadingRequests: adminReducer.loadingRequests,
	requests: adminReducer.requests,
	managers: adminReducer.managers,
	userData: signInReducer.userData,
});

const mapDispatchToProps = {
	getRequests: adminActions.getRequests,
	getManagers: adminActions.getManagers,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(Requests);
