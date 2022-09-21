import { browser } from '$app/environment';

export const scrollSelectionIntoView = () => {
	if (browser) {
		setTimeout(() => {
			const elements = document.getElementsByClassName('navSelected');
			if (elements && elements.length > 0) {
				elements[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
			}
		}, 1);
	}
};
