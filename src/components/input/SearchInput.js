import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button/Button';

const SearchInput = ({ color, placeholder, searchBar, value, onChange }) => {
	const [searchValue, setSearchValue] = useState('');
	useEffect(() => {
		setSearchValue(value);
	}, [value]);

	const handleOnChange = (e) => {
		onChange(e.target.value);
		setSearchValue(e.target.value);
	};
	const deleteSearchValue = () => {
		onChange('');
		setSearchValue('');
	};

	const goToPreviousRoute = () => {};

	return (
		<div className={classNames({ 'search-bar': searchBar })}>
			<div className={classNames({ container: searchBar })}>
				<div className="search-field">
					<input
						className={classNames(
							{ active: searchValue, 'search-bar': searchBar },
							color,
						)}
						type="text"
						placeholder={placeholder}
						value={searchValue}
						onChange={handleOnChange}
					/>
					<span className="icon icon-search" />
					<button className="back-btn" onClick={goToPreviousRoute}>
						<span className="icon icon-arrow-back" />
					</button>
					<button className="close-btn" onClick={deleteSearchValue}>
						<span className="icon icon-close" />
					</button>
				</div>
			</div>
		</div>
	);
};

SearchInput.defaultProps = {
	searchBar: true,
	placeholder: 'Zoek een boek of lijst',
	onChange: () => {},
};

SearchInput.propTypes = {
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};

export default SearchInput;
