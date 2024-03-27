import '../styles/about_section.scss';
import React, { memo, useRef } from 'react';
import Spiral from '../../../images/illustrations/spiral';
import LabyrinthImg from '../../../images/illustrations/labyrinth';

const About = ({ blockRef }) => {
	return (
		<div ref={blockRef} className="page-section about-section">
			<Spiral />
			<LabyrinthImg />
			<div className="container">
				<div className="row">
					<div className="col s-8 m-6 s-offset-2 m-offset-3">
						<p className="sup-text">
							Наша авторская трансформационная игра помогает расширять воображение и
							менять мышление в игровом формате.
						</p>
						<h2 className="section-title">Больше, чем игра</h2>
						<p className="desc">
							Это инструмент по поиску ответов на свои вопросы. И не важно в какой
							сфере жизни они лежат - личное развитие или отношения, творчество или
							открытие бизнеса, карьера или деньги, планирование или разработка новой
							идеи, поиск смысла или просто научиться принимать мир как он есть.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(About);
