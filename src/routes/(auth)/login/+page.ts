import { env } from '$env/dynamic/public';

export function load({url}) {
	let returnTo: any = '';

	if (!url.searchParams.get('returnTo')?.startsWith(env.PUBLIC_APP_LOGINPATH))
		returnTo = url.searchParams.get('returnTo');
	return {
		returnTo
	};
}
