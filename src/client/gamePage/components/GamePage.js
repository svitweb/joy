import '../styles/style.scss';
import React, { memo } from 'react';
import Labyrinth from './Labyrinth';
import Tower from './Tower';
import CardsMenu from './CardsMenu';
import CardModal from '../../../components/modals/card/components/CardModal';
import LabyrinthQuestionModal from '../../../components/modals/labyrinthQuestion/components/LabyrinthQuestionModal';
import TowerModal from '../../../components/modals/tower/components/TowerModal';

const GamePage = () => {
	return (
		<>
			<main className="page-content game-page">
				<div className="container">
					<div className="row">
						<div className="col l-4">
							<Labyrinth type="purple" />
						</div>
						<div className="col l-4 l-offset-4">
							<Labyrinth type="blue" />
						</div>
						<div className="col l-4 ">
							<Labyrinth type="gold" />
						</div>
						<div className="col l-4 l-offset-4">
							<Labyrinth type="red" />
						</div>
						<div className="col l-4 l-offset-4 tower-col">
							<Tower />
						</div>
					</div>
				</div>
				<CardsMenu />
			</main>
			<CardModal />
			<LabyrinthQuestionModal />
			<TowerModal />
		</>
	);
};

export default memo(GamePage);
