import { audioVisualizationActionTypes } from './Constants';

export function setAudioVisualization(data) {
	return {
		type: audioVisualizationActionTypes.SET_AUDIO_VISUALIZATION,
		payload: { data },
	};
}
