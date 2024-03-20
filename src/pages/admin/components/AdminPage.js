import '../styles/admin_page.scss';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as adminActions from '../Actions';
import SignInModal from '../modals/signIn/components/SignInModal';
import CreateManagerModal from '../modals/createManager/components/CreateManagerModal';
import Cookies from 'js-cookie';
import Button from '../../../components/button/Button';
// import Accordion from '../../../components/accordion/Accordion';
import Submenu from '../../../components/submenu/Submenu';
import Overview from './tabs/Overview';
import Label from '../../../components/label/Label';
import * as createManagerActions from '../modals/createManager/Actions';
import * as signInActions from '../modals/signIn/Actions';

const AdminPage = ({
	loading,
	data,
	userData,
	getAdminData,
	toggleAdminLoginModal,
	toggleCreateManagerModal,
	toggleSignInModal,
	signOut,
	getUserData,
}) => {
	const ac = Cookies.get('accessToken');

	const { id, name, email, role } = userData || {};

	const [tab, setTab] = useState(0);

	useEffect(() => {
		if (!ac) {
			toggleSignInModal({ open: true });
		} else {
			getUserData();
		}
	}, []);

	useEffect(() => {
		console.log('----->>', id);
		if (!ac) {
			// toggleAdminLoginModal({ isOpenLoginModal: true });
		}
	}, [id]);

	// const onSubmitDeleteList = (e, id) => {
	// 	e.stopPropagation();
	// 	let subm = window.confirm('Are you sure you want delete this list?');
	// 	subm && deleteList(id);
	// };

	// const addEditForm = (e, id, name, code) => {
	// 	e.stopPropagation();
	// 	editListInit(name, code, id);
	// };

	return (
		<>
			<main className="admin-page">
				<div className="container">
					<header className="admin-page-header">
						<h1 className="admin-page-title">
							{!!userData ? (
								<>
									{name}
									<Label title={role} />
								</>
							) : (
								<>Upgrade</>
							)}
						</h1>
						{!!userData && (
							<div className="info-block">
								<span className="info">{email}</span>
								<Button
									onClick={() => signOut()}
									iconName="icon-logout"
									className="logout-btn small"
									// title="log out"
								/>
							</div>
						)}
					</header>
					<div className="admin-page-body">
						{userData ? (
							<>
								<Submenu
									menuItems={[
										{ title: 'Overview', value: 'overview', index: 0 },
										{ title: 'Statistic', value: 'statistic', index: 1 },
									]}
									onChange={setTab}
									focusItemIndex={tab}
								/>
								{tab === 0 && <Overview />}
								{tab === 1 && (
									<div>
										<ul>
											<li>admins: 2</li>
											<li>managers: 5</li>
											<li>games played: 100</li>
											<li>codes created: 10000</li>
										</ul>
									</div>
								)}
							</>
						) : (
							<>
								<p className="desc">You need to login for using admin options</p>
								<Button
									onClick={() => toggleSignInModal({ open: true })}
									iconName="icon-login"
									className="logout-btn"
									title="log in"
								/>
							</>
						)}
					</div>
				</div>
			</main>
			<SignInModal />
			<CreateManagerModal />
		</>
	);
};

AdminPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	data: PropTypes.object,
};

const mapStateToProps = ({ adminReducer, signInReducer }) => ({
	loading: adminReducer.loading,
	data: adminReducer.data,
	userData: signInReducer.userData,
});

const mapDispatchToProps = {
	toggleSignInModal: signInActions.toggleSignInModal,
	signOut: signInActions.signOut,
	getUserData: signInActions.getUserData,
	getAdminData: adminActions.getAdminData,
	toggleCreateManagerModal: createManagerActions.toggleCreateManagerModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
