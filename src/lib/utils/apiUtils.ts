import { dev } from '$app/environment';

export const apiBaseURL = () => {
	if (dev) {
		return 'http://localhost:30080/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	} else {
		return 'https://mighty-river-49444.herokuapp.com/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	}
};
