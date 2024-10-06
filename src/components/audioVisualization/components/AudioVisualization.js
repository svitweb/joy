import '../styles/style.scss';
import React, { memo, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player/lazy';
import * as audioVisualizationActions from '../Actions';
// import labOpenSound from '../../../music/visualization/labOpen.mp3';
// import fullTreeLoadSound from '../../../music/visualization/fullTreeLoad.mp3';
// import towerActiveSound from '../../../music/visualization/towerActive.mp3';
import { audioVisualizationTypes } from '../Constants';

const AudioVisualization = ({ audioFileName, setAudioVisualization }) => {
	const [file, setFile] = useState('');
	const playerRef = useRef(null);

	useEffect(() => {
		/* switch (audioFileName) {
			case audioVisualizationTypes.LAB_OPEN:
				setFile(labOpenSound);
				break;
			case audioVisualizationTypes.FULL_TREE_LOAD:
				setFile(fullTreeLoadSound);
				break;
			case audioVisualizationTypes.TOWER_ACTIVE:
				setFile(towerActiveSound);
				break;
			default:
				setFile('');
				break;
		} */
	}, [audioFileName]);

	return (
		<div className="audio-visualization">
			<ReactPlayer
				ref={playerRef}
				width={0}
				height={0}
				className="audio-visualization-player"
				url={file}
				playing={true}
				controls={false}
				volume={1}
				onEnded={() => {
					setAudioVisualization({ audioFileName: '' });
				}}
			/>
		</div>
	);
};

const mapStateToProps = ({ audioVisualizationReducer }) => ({
	audioFileName: audioVisualizationReducer.audioFileName,
});

const mapDispatchToProps = {
	setAudioVisualization: audioVisualizationActions.setAudioVisualization,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(AudioVisualization));
