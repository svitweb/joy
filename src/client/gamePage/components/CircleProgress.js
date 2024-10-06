import React, { memo } from 'react';
import Button from '../../../components/button/Button';

const CircularProgress = ({ progress, isLoaded, onStart, size = 100, strokeWidth = 10 }) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (progress / 100) * circumference;

	return (
		<div className="circle-progress">
			<svg width={size} height={size}>
				<circle
					stroke="#9c94a1"
					fill="transparent"
					strokeWidth={strokeWidth}
					r={radius}
					cx={size / 2}
					cy={size / 2}
				/>
				<circle
					stroke="#662ea3"
					fill="transparent"
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					r={radius}
					cx={size / 2}
					cy={size / 2}
					strokeLinecap="round"
					style={{
						transition: 'stroke-dashoffset 0.5s',
						transform: 'rotate(-90deg)',
						transformOrigin: 'center',
					}}
				/>
			</svg>
			{isLoaded ? (
				<Button
					className="circle-progress-btn"
					type="icon"
					onClick={onStart}
					title="PLAY"
					iconName="icon-play"
				/>
			) : (
				<span className="circle-progress-counter">{progress}%</span>
			)}
		</div>
	);
};

export default memo(CircularProgress);
