import React, { memo } from 'react';
import labyrinthImg from './labyrinth.svg';
import classNames from 'classnames';

const LabyrinthImg = ({ className }) => {
	return <img src={labyrinthImg} alt="" className={classNames('labyrinth-img', className)} />;
};

export default memo(LabyrinthImg);
