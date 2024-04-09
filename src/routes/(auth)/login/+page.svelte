<script lang="ts">
	// import ToastHelper from '$lib/helper/ToastHelper.js';
	import { enhance } from '$app/forms';
	import { env } from '$env/dynamic/public';
	import { goto } from '$app/navigation';
	// import { focusTrap, getToastStore } from '@skeletonlabs/skeleton';

	export let data;

	// const toastStore = getToastStore();
	const { returnTo } = data;

	const loginFormEnhance = () => {
		return async ({ result }: any) => {
			if (result.type === 'error') {
				const error = result?.error;

				// ToastHelper.ShowError(error?.message ?? 'Login Error', toastStore);
			} else {
				// ToastHelper.ShowSuccess('Login Successfully!', toastStore);
				// console.log(returnTo ?? env.PUBLIC_APP_ORIGIN);

				goto(returnTo ?? env.PUBLIC_APP_STARTPATH);
				// goto(returnTo ?? env.PUBLIC_APP_ORIGIN);
			}
		};
	};
</script>

<form
	class="space-y-4"
	method="post"
	action="?/loginByCookie"
	use:enhance={loginFormEnhance}
	>
	<!-- use:focusTrap={true} -->
	<label class="label">
		<span>Username <span class="text-red-500">*</span> </span>
		<input class="input variant-soft" type="text" name="username" required />
	</label>

	<label class="label">
		<span>Password <span class="text-red-500">*</span> </span>
		<input class="input variant-soft" type="password" required name="password" />
	</label>

	<section class="flex flex-row items-center gap-5 !mt-8">
		<a href="/password-request" class="inline-block align-baseline hover:underline"
			>Forgot Pasword?</a
		>
		<div class="flex-grow" />
		<button type="submit" class="btn variant-soft font-medium">Login</button>
	</section>
</form>
