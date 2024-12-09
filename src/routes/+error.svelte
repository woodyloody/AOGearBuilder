<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen flex-col justify-center space-y-5 text-center">
	<p class="merriweather-regular text-9xl text-white">{$page.status}</p>
	<p class="merriweather-regular text-3xl text-white">{$page.error?.message}</p>
</div>
