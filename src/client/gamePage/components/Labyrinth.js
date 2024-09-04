import '../styles/labyrinth.scss';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import goldLabImg from '../images/goldLab.png';
import purpleLabImg from '../images/purpleLab.png';
import blueLabImg from '../images/blueLab.png';
import redLabImg from '../images/redLab.png';
import { getQuestionsByType } from '../Helpers';
import * as gameActions from '../Actions';
import * as labyrinthQuestionModalActions from '../../../components/modals/labyrinthQuestion/Actions';
import LabyrinthOverlay from './LabyrinthOverlay';

const Labyrinth = ({ type, toggleLabyrinthQuestionModal, changeData, gameData = {} }) => {
	const node = useRef();

	const { tower } = gameData;

	const [active, setActive] = useState(false);
	const [objectActive, setObjectActive] = useState(false);
	const [objectBottomActive, setObjectBottomActive] = useState(false);

	useEffect(() => {
		document.addEventListener('click', clickOutside);

		return () => {
			document.removeEventListener('click', clickOutside);
		};
	}, []);

	const getImgByType = useCallback(() => {
		switch (type) {
			case 'purple':
				return purpleLabImg;
			case 'blue':
				return blueLabImg;
			case 'gold':
				return goldLabImg;
			case 'red':
				return redLabImg;
			default:
				return purpleLabImg;
		}
	}, [type]);

	const clickOutside = (e) => {
		setActive(!!node.current?.contains(e.target));
	};

	const handleClickOnLab = () => {
		setActive(true);

		let labStore = gameData[`${type}Lab`]?.questions || [];

		const cards = getQuestionsByType(type);

		if (labStore.length === cards.length) {
			labStore = [];
		}

		let cardData;

		do {
			cardData = cards[Math.floor(Math.random() * cards.length)];
		} while (labStore.includes(cardData.id));

		labStore.push(cardData.id);

		changeData({
			...gameData,
			[`${type}Lab`]: { ...gameData[`${type}Lab`], questions: labStore },
		});

		toggleLabyrinthQuestionModal({ open: true, type, data: cardData });
	};

	const handleClickOnObject = (e, objType) => {
		e.stopPropagation();
		toggleLabyrinthQuestionModal({ open: true, type, objType });
	};

	return (
		<div className={classNames('labyrinth-section', { hide: tower?.active })}>
			<div ref={node} className={classNames('labyrinth-wrap', type, { active })}>
				<img
					src={getImgByType()}
					className="labyrinth-figure"
					alt="labyrinth"
					onClick={handleClickOnLab}
				/>
				<LabyrinthOverlay
					type={type}
					objectActive={objectActive}
					objectBottomActive={objectBottomActive}
				/>
				<div
					className="labyrinth-object"
					onClick={(e) => handleClickOnObject(e, 'top')}
					onMouseOver={() => setObjectActive(true)}
					onMouseLeave={() => setObjectActive(false)}
				/>
				<div
					className="labyrinth-object bottom"
					onClick={(e) => handleClickOnObject(e, 'main')}
					onMouseOver={() => setObjectBottomActive(true)}
					onMouseLeave={() => setObjectBottomActive(false)}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = ({ gamePageReducer }) => ({
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleLabyrinthQuestionModal: labyrinthQuestionModalActions.toggleLabyrinthQuestionModal,
	changeData: gameActions.changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Labyrinth));
