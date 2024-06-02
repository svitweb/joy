import '../styles/labyrinth.scss';
import React, { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import purpleLabyrinth from '../images/purple_labyrinth.webp';
import purpleLabyrinth1 from '../images/Lab1.png';
import purpleLabyrinth2 from '../images/Labyrinth1.png';
import blueLabImg from '../images/Lab2.webp';
import goldLabImg from '../images/GoldLab.webp';
import redLabImg from '../images/RedLab.webp';
import redLabImg1 from '../images/RedLab1.webp';

const GamePage = ({ type }) => {
	const node = useRef();

	const [active, setActive] = useState(false);

	useEffect(() => {
		document.addEventListener('click', clickOutside);

		return () => {
			document.removeEventListener('click', clickOutside);
		};
	}, []);

	const clickOutside = (e) => {
		setActive(!!node.current?.contains(e.target));
	};

	const handleClickOnObject = (e) => {
		e.stopPropagation();
	};

	const getImgByType = () => {
		switch (type) {
			case 'purple':
				return purpleLabyrinth2;
			case 'blue':
				return blueLabImg;
			case 'gold':
				return goldLabImg;
			case 'red':
				return redLabImg1;
			default:
				return purpleLabyrinth2;
		}
	};

	return (
		<div className="labyrinth-section">
			<div ref={node} className={classNames('labyrinth-wrap', { active })}>
				{/* <div className="labyrinth-figure" onClick={() => setActive(true)} /> */}
				<img
					src={getImgByType()}
					className="labyrinth-figure"
					alt="labyrinth"
					onClick={() => setActive(true)}
				/>
				<div className="labyrinth-object" onClick={handleClickOnObject} />
			</div>
		</div>
	);
};

export default memo(GamePage);
