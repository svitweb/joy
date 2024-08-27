import 'swiper/css';
import './style.scss';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const Swiper = ({ items, className, spaceBetween, swiperRef }) => {
	return (
		<ReactSwiper
			slidesPerView="auto"
			spaceBetween={spaceBetween}
			freeMode
			modules={[FreeMode]}
			className={className}
			onAfterInit={(swiper) => {
				swiperRef.current = swiper;
			}}
			pagination={{ clickable: true }}
			// navigation
			loop={false}
			mousewheel={true}
			centerInsufficientSlides
		>
			{items.map((el, index) => (
				<SwiperSlide key={el?.key || index}>{el}</SwiperSlide>
			))}
		</ReactSwiper>
	);
};

Swiper.defaultProps = {
	items: [],
	className: '',
	spaceBetween: 8,
};

Swiper.propTypes = {
	items: PropTypes.array,
	className: PropTypes.string,
	spaceBetween: PropTypes.number,
};

export default memo(Swiper);
