import '../styles/admin_page.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import * as signInActions from '../modals/signIn/Actions';
import Button from '../../../components/button/Button';
import Label from '../../../components/label/Label';
import Submenu from '../../../components/submenu/Submenu';
import SignInModal from '../modals/signIn/components/SignInModal';
import CreateManagerModal from '../modals/createManager/components/CreateManagerModal';
import Overview from './tabs/Overview';
import Managers from './tabs/Managers';

const AdminPage = ({ userData, toggleSignInModal, signOut, getUserData }) => {
	const accessToken = Cookies.get('accessToken');

	const { name, email, role } = userData || {};

	const [tab, setTab] = useState(0);

	useEffect(() => {
		if (!accessToken) {
			toggleSignInModal({ open: true });
		} else {
			getUserData();
		}

		return () => {
			setTab(0);
		};
	}, []);

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
								/>
							</div>
						)}
					</header>
					<div className="admin-page-body">
						{userData ? (
							<>
								<Submenu
									menuItems={
										role === 'admin'
											? [
													{
														title: 'Overview',
														value: 'overview',
														index: 0,
														link: `/admin`,
													},
													{
														title: 'Managers',
														value: 'managers',
														index: 1,
														link: `/admin/managers`,
													},
													{
														title: 'Statistic',
														value: 'statistic',
														index: 2,
														link: `/admin/statistic`,
													},
											  ]
											: []
									}
									onChange={setTab}
									focusItemIndex={tab}
								/>
								{tab === 0 && <Overview />}
								{role === 'admin' && (
									<>
										{tab === 1 && <Managers />}
										{tab === 2 && (
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

const mapStateToProps = ({ adminReducer, signInReducer }) => ({
	loading: adminReducer.loading,
	data: adminReducer.data,
	userData: signInReducer.userData,
});

const mapDispatchToProps = {
	toggleSignInModal: signInActions.toggleSignInModal,
	signOut: signInActions.signOut,
	getUserData: signInActions.getUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
