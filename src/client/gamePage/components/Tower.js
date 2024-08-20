import '../styles/tower.scss';
import React, { memo, useRef } from 'react';
// import towerImg from '../images/tower.jpg';
import towerImg from '../images/T1.png';

const Tower = () => {
	return (
		<div className="tower">
			<img
				src={towerImg}
				// className="labyrinth-figure"
				alt="tower"
				// onClick={handleClickOnLab}
			/>
		</div>
	);
};

export default memo(Tower);
