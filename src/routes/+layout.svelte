<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import '../app.css';
	import type { PageData } from './$types';
	let { data, children }: { data: PageData; children: () => any } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar session={data.session} />
	<main>
		<Sidebar.Trigger />
		{@render children()}
	</main>
</Sidebar.Provider>
