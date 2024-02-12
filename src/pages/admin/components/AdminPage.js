import '../styles/admin_page.scss';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as adminActions from '../Actions';
import LoginAdminModal from './LoginAdminModal';
import Cookies from 'js-cookie';
import Button from '../../../components/button/Button';
// import Accordion from '../../../components/accordion/Accordion';
import Submenu from '../../../components/submenu/Submenu';
import Overview from './tabs/Overview';
import Label from '../../../components/label/Label';

const AdminPage = ({ loading, data, userData, getAdminData, toggleAdminLoginModal }) => {
	const ac = Cookies.get('adminAccess');

	const { email = 'infro11+pro@ukr.net' } = userData || {};

	const [tab, setTab] = useState(0);

	useEffect(() => {
		console.log('----->>', ac);
		if (!ac) {
			toggleAdminLoginModal({ isOpenLoginModal: true });
		}
	}, []);
	// const onSubmitDeleteList = (e, id) => {
	// 	e.stopPropagation();
	// 	let subm = window.confirm('Are you sure you want delete this list?');
	// 	subm && deleteList(id);
	// };

	// const addEditForm = (e, id, name, code) => {
	// 	e.stopPropagation();
	// 	editListInit(name, code, id);
	// };

	const logOut = () => {
		Cookies.remove('adminAccess');
		toggleAdminLoginModal({ isOpenLoginModal: true });
	};

	return (
		<>
			<main className="admin-page">
				<div className="container">
					<header className="admin-page-header">
						<h1 className="admin-page-title">
							Upgrade {!!ac && <Label title={'admin'} />}
						</h1>
						{!!ac && (
							<div className="info-block">
								<span className="info">{email}</span>
								<Button
									onClick={logOut}
									iconName="icon-logout"
									className="logout-btn small"
									// title="log out"
								/>
							</div>
						)}
					</header>
					<div className="admin-page-body">
						{ac ? (
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
									onClick={() =>
										toggleAdminLoginModal({ isOpenLoginModal: true })
									}
									iconName="icon-login"
									className="logout-btn"
									title="log in"
								/>
							</>
						)}
					</div>
				</div>
			</main>
			<LoginAdminModal />
		</>
	);
};

AdminPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	data: PropTypes.object,
};

const mapStateToProps = ({ adminReducer }) => ({
	loading: adminReducer.loading,
	data: adminReducer.data,
	isOpenLoginModal: adminReducer.isOpenLoginModal,
});

const mapDispatchToProps = {
	toggleAdminLoginModal: adminActions.toggleAdminLoginModal,
	getAdminData: adminActions.getAdminData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
