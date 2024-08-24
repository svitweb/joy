const fs = require('fs');
const path = require('path');

const localeNames = ['en', 'ua', 'ru'];

function readLocale(filePath) {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
	} catch (error) {
		console.error(`Error reading file ${filePath}:`, error);
		return null;
	}
}

function writeLocale(filePath, data) {
	try {
		fs.writeFileSync(filePath, JSON.stringify(data, null, '\t'), 'utf8');
		console.log(`Updated file ${filePath} successfully.`);
	} catch (error) {
		console.error(`Error writing file ${filePath}:`, error);
	}
}

function shouldKeepKey(key) {
	return key.endsWith('_two') || key.endsWith('_few') || key.endsWith('_many');
}

function sortKeys(obj) {
	const sortedObj = {};
	Object.keys(obj)
		.sort()
		.forEach((key) => {
			if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
				sortedObj[key] = sortKeys(obj[key]);
			} else {
				sortedObj[key] = obj[key];
			}
		});
	return sortedObj;
}

function updateLocale(baseLocale, targetLocale) {
	const result = {};

	Object.keys(baseLocale).forEach((key) => {
		if (typeof baseLocale[key] === 'object' && baseLocale[key] !== null) {
			result[key] = updateLocale(baseLocale[key], targetLocale[key] || {});
		} else {
			result[key] = Object.prototype.hasOwnProperty.call(targetLocale, key)
				? targetLocale[key]
				: '';
		}
	});

	Object.keys(targetLocale).forEach((key) => {
		if (!Object.prototype.hasOwnProperty.call(result, key) && shouldKeepKey(key)) {
			result[key] = targetLocale[key];
		}
	});

	return sortKeys(result);
}

const pathToFile = 'src/utils/localization/';
const baseLocalePath = path.resolve(__dirname, `${pathToFile}enLocale.json`);
const baseLocale = readLocale(baseLocalePath);

if (baseLocale) {
	const sortedBaseLocale = sortKeys(baseLocale);
	writeLocale(baseLocalePath, sortedBaseLocale);

	localeNames.forEach((locale) => {
		if (locale !== 'en') {
			const localePath = path.resolve(__dirname, `${pathToFile}${locale}Locale.json`);
			const targetLocale = readLocale(localePath);

			if (targetLocale) {
				const updatedLocale = updateLocale(sortedBaseLocale, targetLocale);
				writeLocale(localePath, updatedLocale);
			} else {
				console.warn(`Locale file ${localePath} does not exist or is not readable.`);
			}
		}
	});
} else {
	console.error(`Base locale file ${baseLocalePath} does not exist or is not readable.`);
}
