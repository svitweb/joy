import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';

const Scrollbar = ({
	autoHeight,
	autoHeightMax,
	autoHide,
	thumbHeight,
	thumbWidth,
	thumbRadius,
	thumbColor,
	getNewDataPortion,
	isMobileView,
	positionFromStartFetchNewDataPortion,
	viewClassName,
	getScrollBar,
	...rest
}) => {
	const scrollArea = useRef();

	useEffect(() => {
		if (scrollArea.current && getScrollBar) {
			getScrollBar(scrollArea.current);
		}
	}, [scrollArea]);

	const handleScroll = (e) => {
		const { scrollTop, scrollHeight, clientHeight } = e;
		// position will be greater than 1 if we are about to reach the bottom
		const position =
			(scrollTop + positionFromStartFetchNewDataPortion) / (scrollHeight - clientHeight);
		if (position > 1) getNewDataPortion();
	};

	const renderThumbVertical = ({ style, ...props }) => {
		const thumbStyle = {
			backgroundColor: thumbColor,
			width: thumbWidth,
			zIndex: '10',
			borderRadius: thumbRadius,
		};

		return <div className="track" style={{ ...style, ...thumbStyle }} {...props} />;
	};

	const renderView = ({ style, ...props }) => (
		<div
			className={classNames('box', viewClassName)}
			style={{
				...style,
				overflowX: 'hidden',
				marginBottom: 0,
			}}
			{...props}
		/>
	);

	return (
		<Scrollbars
			ref={scrollArea}
			onUpdate={getNewDataPortion && handleScroll}
			className={classNames('custom-scrollbars', { 'custom-scrollbars-hide': autoHide })}
			renderView={renderView}
			renderThumbVertical={renderThumbVertical}
			renderThumbHorizontal={(props) => <div {...props} className="thumb-horizontal" />}
			autoHeight={autoHeight}
			autoHeightMax={autoHeightMax}
			thumbSize={thumbHeight}
			{...rest}
		/>
	);
};

Scrollbar.defaultProps = {
	autoHeight: true,
	autoHeightMax: '100vh',
	autoHide: false,
	thumbColor: '#E5E5E5',
	thumbHeight: 200,
	thumbRadius: 8,
	thumbWidth: 8,
	positionFromStartFetchNewDataPortion: 10,
};

Scrollbar.propTypes = {
	autoHeight: PropTypes.bool,
	autoHide: PropTypes.bool,
	thumbColor: PropTypes.string,
	thumbHeight: PropTypes.number,
	thumbRadius: PropTypes.number,
	thumbWidth: PropTypes.number,
};

export default memo(Scrollbar);
