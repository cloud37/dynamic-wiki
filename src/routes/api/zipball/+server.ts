import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

const apiBaseURL = () => {
	if (dev) {
		return 'http://localhost:30080/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	} else {
		return 'https://mighty-river-49444.herokuapp.com/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
	}
};

const headers = new Headers({
	Accept: 'application/vnd.github+json',
	origin: '*',
	Authorization: `Bearer: ${env.GITHUB_API_KEY}`
});
const fetchParameters = { method: 'GET', headers };

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return fetch(apiBaseURL(), fetchParameters);
}
