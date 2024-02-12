import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as listPageActions from './ListPageActions';
import { connect } from 'react-redux';
import Notification from '../../components/notification/Notification';
import Menu from '../menu/components/Menu';
import Button from '../../components/button/Button';
import io from 'socket.io-client';
import { useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';
import AddSong from './AddSong';
import { BASE_URL } from '../../services/Constants';

const ListPage = ({
	playListId,
	getListDetails,
	playListDetails,
	addSong,
	rateSong,
	updatePlayListSongs,
}) => {
	const [resultSearch, setResultSearch] = useState([]);
	const [currentSong, setCurrentSong] = useState(null);
	const [deezerPlayList, setDeezerPlayList] = useState([]);
	const [playerState, setPlayerState] = useState(null);
	const [ws, setWs] = useState(null);

	const socket = io('https://api.playlisted.ml');
	window.socket = socket;

	const {
		params: { listId },
	} = useRouteMatch();

	useEffect(() => {
		window.DZ.init({
			appId: 417202,
			channelUrl: BASE_URL,
			player: {
				container: 'player',
				width: '100%',
				height: '62px',
				size: 'small',
				autoplay: 'false',
				playlist: false,
				onload: function () {
					setPlayerState(true);
				},
			},
		});

		setWs(socket);

		socket.emit('playlist:connect', { playlistId: playListId });
		socket.on('playlist:songsReordered', function (data) {
			updatePlayListSongs(data);
			const deezerTrackIds = data.data.orderedPlaylistSongs.map(
				(deezerSong) => deezerSong.deezerTrackId,
			); // todo: prettifie
			setDeezerPlayList(deezerTrackIds);
		});

		const handleCurrentTrackDeezerEvent = function (track) {
			// Need to know current track on BE;
			const eventData = { playlistId: playListId, currentTrack: track.track };
			window.socket.emit('player:action', eventData);
			setCurrentSong(track.index);
		};
		window.DZ.Event.subscribe('current_track', handleCurrentTrackDeezerEvent);
	}, []);

	useEffect(() => {
		getListDetails(listId);
	}, [listId]);

	useEffect(() => {
		if (playListDetails) {
			let dpl =
				playListDetails.songs.length &&
				playListDetails.songs.map((item) => {
					return item.deezerTrackId;
				});

			setDeezerPlayList(dpl ? dpl : []);
		}
	}, [playListDetails]);

	useEffect(() => {
		playerState && window.DZ.player.playTracks(deezerPlayList, false);
	}, [deezerPlayList, playerState]);

	const searchSong = (e) => {
		if (e.target.value.trim()) {
			window.DZ.api(`search/track?q=${e.target.value}`, function (response) {
				setResultSearch(response.data);
			});
		} else {
			setResultSearch([]);
		}
	};

	const aS = function (deezerTrackId, trackName, artistName, albumCover) {
		addSong(playListId, {
			deezerTrackId: deezerTrackId,
			track: {
				title: trackName,
			},
			artist: {
				name: artistName,
			},
			album: {
				cover: albumCover,
			},
		});
	};

	const rS = (e, songId, status) => {
		e.stopPropagation();
		rateSong(playListId, songId, {
			vote: status,
		});
	};

	const playSong = (index) => {
		if (deezerPlayList) {
			playerState && window.DZ.player.playTracks(deezerPlayList, index);
		}
	};

	return (
		<>
			<Menu />
			<main className="page-content">
				<div className="songs-page">
					<div className="container">
						<h1 className="play-list-title">
							<span className="text">{playListDetails && playListDetails.name}</span>
							<span className="code">{playListDetails && playListDetails.code}</span>
						</h1>

						<AddSong
							setResultSearch={setResultSearch}
							resultSearch={resultSearch}
							aS={aS}
						/>

						<div id="player" className="player" />
						{playListDetails && (
							<ul className="play-list">
								{playListDetails.songs.length
									? playListDetails.songs.map((item, index) => (
											<li
												className={classNames('play-list-song', {
													active: currentSong === index,
												})}
												key={item._id}
												onClick={() => playSong(index)}
											>
												<img
													src={item.album.cover}
													alt={item.track.title}
												/>
												<div className="row middle-xs">
													<div className="col s-9">
														<h4 className="name">{item.track.title}</h4>
														<span className="label">created by : </span>
														<span className="created-by">
															{item.artist.name}
														</span>
													</div>
													<div className="col s-3">
														<span className="label">rating: </span>
														<span
															className={`rating ${
																item.rate < 0
																	? 'negative'
																	: item.rate > 0
																	? 'positive'
																	: ''
															}`}
														>
															{item.rate === 0 ? '---' : item.rate}
														</span>
													</div>
												</div>

												<div className="btn-group">
													<Button
														iconName="icon-like"
														className="circle"
														onClick={(e) => rS(e, item._id, '+')}
													/>
													<Button
														iconName="icon-dislike"
														className="circle"
														onClick={(e) => rS(e, item._id, '-')}
													/>
												</div>
											</li>
									  ))
									: 'Empty list'}
							</ul>
						)}
					</div>
				</div>
			</main>
		</>
	);
};

ListPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	// mainPageActions: PropTypes.object.isRequired,
	playListDetails: PropTypes.object,
	playListId: PropTypes.string,
};

function mapStateToProps(state) {
	return {
		loading: state.listPageReducer.loading,
		playListDetails: state.listPageReducer.playListDetails,
		playListId: state.listPageReducer.playListId,
	};
}

const mapDispatchToProps = {
	addSong: listPageActions.addSong,
	rateSong: listPageActions.rateSong,
	updatePlayListSongs: listPageActions.updatePlayListSongs,
	getListDetails: listPageActions.getListDetails,
	// createList: mainPageActions.createList,
	// editList: mainPageActions.editList,
	// deleteList: mainPageActions.deleteList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
