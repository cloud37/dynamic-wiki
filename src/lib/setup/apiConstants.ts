const headers = new Headers({
	Accept: 'application/vnd.github+json',
	origin: '*'
});
export const fetchParameters = { method: 'GET', headers };

export const apiBaseURL =
	'http://localhost:30080/https://api.github.com/repos/baileyholl/Ars-Nouveau/zipball';
