export const getIdFromResourceLocation = (resourceLocation?: string) => {
	return resourceLocation?.split(':').pop() || 'unknown id';
};
