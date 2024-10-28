import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as adminActions from '../../Actions';
import Button from '../../../components/button/Button';
import Spinner from '../../../components/Spinner';
import RequestCard from '../RequestCard';

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
		handleReload();
	}, [type, role, _id]);

	const handleReload = () => {
		getRequests({ type, managerId: role === 'manager' ? _id : undefined });
	};

	return (
		<>
			<div className="btn-group">
				{role === 'admin' && (
					<>
						<Button
							className={classNames('switch-btn', { active: type === 'pending' })}
							title="Pending"
							onClick={() => setType('pending')}
							type="link"
						/>
						<Button
							className={classNames('switch-btn', { active: type === 'connected' })}
							title="Connected"
							onClick={() => setType('connected')}
							type="link"
						/>
					</>
				)}
				<Button
					type="icon"
					iconName="icon-reload"
					title="reload"
					className="reload-btn"
					onClick={handleReload}
				/>
			</div>
			<section className="admin-section">
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
