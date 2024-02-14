import './style.scss';
import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import logoFull from '../../images/illustrations/logo-full.svg';
import Button from '../../components/button/Button';
import Socials from '../../components/socials/Socials';

const Footer = ({
	logOut,
	toggleCreateListModal,
	isCreateListModal,
	toggleJoinListModal,
	isJoinListModal,
	createList,
	joinList,
	createNotification,
}) => {
	return (
		<footer className="main-footer">
			<div className="container">
				<div className="row">
					<div className="col s-4 m-6">
						<img src={logoFull} alt="logo" className="main-footer-logo" />
					</div>
					<div className="col xs-5 s-4 m-3">
						<h3 className="main-footer-title">меню</h3>
						<ul>
							<li>
								<Button type="link" title="О Игре" className="nav-btn" />
							</li>
							<li>
								<Button type="link" title="Темы" className="nav-btn" />
							</li>
							<li>
								<Button type="link" title="Запросы" className="nav-btn" />
							</li>
							<li>
								<Button type="link" title="Форматы" className="nav-btn" />
							</li>
							<li>
								<Button type="link" title="Создатели" className="nav-btn" />
							</li>
						</ul>
					</div>
					<div className="col xs-7 s-4 m-3 col-flex">
						<h3 className="main-footer-title">Контакты</h3>
						<ul>
							<li>
								<a className="nav-btn">+380 67 123 45 67</a>
							</li>
							<li>
								<a className="nav-btn">+380 50 765 43 21</a>
							</li>
							<li>
								<a className="nav-btn">upgrade.tg@gmail.com</a>
							</li>
						</ul>
						<Socials />
					</div>
				</div>
				<span className="divider" />
				<p className="copyright">© 2024 Всe права защищено</p>
			</div>
		</footer>
	);
};

export default memo(Footer);
