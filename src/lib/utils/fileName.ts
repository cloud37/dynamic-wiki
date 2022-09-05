export const getFileName = (zipName: string): string =>
	zipName.split('/')?.pop()?.split('.')[0] || 'unknown';
