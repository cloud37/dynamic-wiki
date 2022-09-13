import https from 'https';

export default async function handler(request, response) {
	let query = Object.entries(request.query);
	query.shift();
	let url = request.query.url;
	query.forEach((entry) => {
		url += '&' + entry[0] + '=' + entry[1];
	});

	const { status, data } = await getRequest(url);

	response.setHeader('Cache-Control', 's-maxage=3600, public, immutable');
	response.setHeader('access-control-allow-origin', '*');
	response.status(status).send(data);

	function getRequest(url) {
		return new Promise((resolve) => {
			https.get(url, (resp) => {
				let data = '';
				resp.on('data', (chunk) => {
					data += chunk;
				});
				resp.on('end', () => {
					resolve({
						status: resp.statusCode,
						data: data
					});
				});
			});
		});
	}
}
