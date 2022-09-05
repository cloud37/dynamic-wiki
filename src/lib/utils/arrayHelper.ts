export interface DictionaryEntry {
	[x: string]: string;
}

export const arrayToDictionary = (array?: Array<DictionaryEntry | undefined>) => {
	let toReturn = {};
	array?.forEach((value) => (toReturn = { ...toReturn, ...value }));
	return toReturn;
};
