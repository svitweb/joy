import '../styles/managers_section.scss';
import React, { memo } from 'react';
import m1 from '../../../images/illustrations/m1.png';
import m2 from '../../../images/illustrations/m2.png';

const Managers = ({ blockRef }) => (
	<div ref={blockRef} className="page-section managers-section">
		<div className="container">
			<h2 className="section-title">создатели игры</h2>
			<div className="row">
				<div className="col s-6 l-4 l-offset-2">
					<div className="manager left-side">
						<img src={m1} alt="photo" className="manager-img" />
						<div className="manager-info">
							<h4 className="manager-name">Елена Бурдей</h4>
							<p className="manager-desc">Психолог, предприниматель</p>
							<p className="manager-desc sub">
								International diploma practicing psychology, master’s degree
							</p>
						</div>
					</div>
				</div>
				<div className="col s-6 l-4">
					<div className="manager right-side">
						<img src={m2} alt="photo" className="manager-img" />
						<div className="manager-info">
							<h4 className="manager-name">Анна Грозина</h4>
							<p className="manager-desc">Коуч, бизнес-тренер, предприниматель</p>
							<p className="manager-desc sub">
								International level Professional Coach, Business Coach, Crisis
								coach, International College of Business Trainers
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default memo(Managers);
