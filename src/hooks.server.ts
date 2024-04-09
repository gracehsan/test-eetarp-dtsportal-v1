import { env } from '$env/dynamic/public';
import type { HandleFetch } from '@sveltejs/kit';

// Handle Server Side Fetch
export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
	
	// Forward client HTTP request cookie to server HTTP request
	// if (request.url.startsWith(env.PUBLIC_HOSTURL_API)) {
	// 	request.headers.set('cookie', event.request.headers.get('cookie') ?? '');
	// }

    console.log('aasdjaksbdkasd')

	// console.log("Request: ", request)
	return fetch(request);
};


