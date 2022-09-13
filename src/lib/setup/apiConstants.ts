import { dev } from '$app/environment';

const headers = new Headers({
	Accept: 'application/vnd.github+json',
	origin: '*'
});
export const fetchParameters = { method: 'GET', headers };

export const apiBaseURL = () => {
	if (dev) {
		return 'http://localhost:30080/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	} else {
		return 'https://arsnouveau.wiki/api/cors?url=https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	}
};
