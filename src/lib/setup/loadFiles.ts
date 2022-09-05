import type JSZip from 'jszip';
import type { JSZipObject } from 'jszip';
import { getFileName } from '../utils/fileName';
import { arrayToDictionary } from '../utils/arrayHelper';

const isTexture = (zipObject: JSZipObject) =>
	!zipObject.dir && zipObject.name.includes('src/main/resources/assets/ars_nouveau/textures/items');
export const isPatchouliCategory = (zipObject: JSZipObject) =>
	!zipObject.dir &&
	zipObject.name.includes(
		'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
	);
export const isPatchouliEntry = (zipObject: JSZipObject) =>
	!zipObject.dir &&
	zipObject.name.includes(
		'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
	);
export const isRecipe = (zipObject: JSZipObject) =>
	!zipObject.dir && zipObject.name.includes('src/main/resources/data/ars_nouveau/recipes');
export const isLanguage = (zipObject: JSZipObject) =>
	!zipObject.dir && zipObject.name.includes('src/main/resources/assets/ars_nouveau/lang');

export const getTextureFiles = (zip: JSZip) => {
	return Promise.all(
		Object.values(zip.files)
			.filter(isTexture)
			.map((file) =>
				zip
					.file(file.name)
					?.async('base64')
					.then((value) => {
						return { [getFileName(file.name)]: value };
					})
			)
	).then((resultingArray) => {
		return arrayToDictionary(resultingArray);
	});
};

export const getMatchingJSONFiles = (matcher: (value: JSZipObject) => boolean, zip: JSZip) => {
	return Promise.all(
		Object.values(zip.files)
			.filter(matcher)
			.map((file) =>
				zip
					.file(file.name)
					?.async('string')
					.then((value) => {
						return { [getFileName(file.name)]: JSON.parse(value) };
					})
			)
	).then((resultingArray) => {
		return arrayToDictionary(resultingArray);
	});
};
