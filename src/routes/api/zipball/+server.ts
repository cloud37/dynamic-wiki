import { env } from '$env/dynamic/private';
import { apiBaseURL } from '$lib/utils/apiUtils';

const headers = new Headers({
	Accept: 'application/vnd.github+json',
	origin: '*',
	Authorization: `Bearer: ${env.GITHUB_API_KEY}`
});
const fetchParameters = { method: 'GET', headers };

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return fetch(apiBaseURL(), fetchParameters).catch((reason) =>
		console.log(JSON.stringify(reason))
	);
}
