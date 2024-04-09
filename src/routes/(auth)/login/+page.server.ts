import { env } from '$env/dynamic/public';
// import FetchHelper from '$lib/helper/FetchHelper.js';
// import { AuthUser } from '$lib/stores/auth.js';
// import type { UserInfo } from '$lib/types/User.js';


export const actions = {
	loginByCookie: async (event: any) => {
		console.log("what what what")
		const formData = await event.request.formData();
		const loginData = {
			username: formData.get('username')?.toString(),
			password: formData.get('password')?.toString()
		};

		// console.log("env.PUBLIC_HOSTURL_API: ", env.PUBLIC_HOSTURL_API)
		// const result = await FetchHelper.Post(loginData, {
		// 	// url: env.PUBLIC_HOSTURL_API + '/api/auth/login-cookie',
		// 	url: '/api/auth/login-cookie',
		// 	serverEvent: event
		// });

		// AuthUser.set(result?.data as UserInfo);
		// // console.log("3. result: ", result);
		
		// return result;
	}
};
