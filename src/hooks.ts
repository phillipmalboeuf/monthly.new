/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {

	const response = await resolve(request)

	return {
		...response,
		headers: {
			...response.headers,
			'Link': '</fonts/barbier-regular-webfont.woff2>; rel="preload"; as="font"; type="font/woff2"; crossorigin="anonymous"',
			'Cache-Control': 's-maxage=1, stale-while-revalidate'
		}
	};
}