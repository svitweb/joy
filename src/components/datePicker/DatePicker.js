import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import React, { memo, useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import moment from 'moment';
import classNames from 'classnames';
// import { useTranslation } from 'react-i18next';
import * as locales from 'date-fns/locale';
// import { getLocalStorageItem } from '../../services/Helper';
// import { DEFAULT_LANGUAGE_LOCALE } from '../../services/Constants';

const systemLanguage = navigator.language || '';
const localeFormatted = systemLanguage.split('-')[1];
const locale = localeFormatted ? localeFormatted.toLowerCase() : systemLanguage;
registerLocale(locale, locales[locale]);

const DatePickerField = ({
	value,
	placeholder,
	disabled,
	className,
	name,
	onChange,
	timeSelect,
	minDate,
	timeIntervals,
	error,
}) => {
	// const { t } = useTranslation();

	const [startDate, setStartDate] = useState(value);

	useEffect(() => {
		if (value) setStartDate(value);
	}, [value]);

	const handleOnChange = (val) => {
		setStartDate(val);
		if (onChange) onChange(val);
	};

	return (
		<div className={classNames('date-picker form-field', className)}>
			<DatePicker
				name={name}
				showIcon={!timeSelect}
				selected={startDate}
				onChange={handleOnChange}
				icon="icon icon-calendar"
				placeholderText={placeholder || 'Select start date'}
				calendarClassName="date-picker-calendar"
				className="date-picker-input"
				timeCaption={false}
				dateFormat={'dd MMMM yyyy HH:mm'}
				minDate={minDate || new Date()}
				timeIntervals={timeIntervals || 30}
				showPopperArrow={false}
				// locale={currentLanguage}
				disabled={disabled}
				formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
				showTimeSelect
				// showTimeSelectOnly={timeSelect}
				renderCustomHeader={({
					date,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
				}) => (
					<div className="date-picker-header">
						<div>{moment(date).format('LLLL')}</div>
						<div className="btn-group">
							<button
								className="month-btn"
								onClick={decreaseMonth}
								disabled={prevMonthButtonDisabled}
								type="button"
							>
								<span className="icon icon-chevron-left" />
							</button>
							<button
								className="month-btn"
								onClick={increaseMonth}
								disabled={nextMonthButtonDisabled}
								type="button"
							>
								<span className="icon icon-chevron-right" />
							</button>
						</div>
					</div>
				)}
			/>
			<span className="error-msg">{error}</span>
		</div>
	);
};

export default memo(DatePickerField);
