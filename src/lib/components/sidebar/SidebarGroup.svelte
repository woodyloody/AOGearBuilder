<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index';

	let { items, label }: { items: { title: string; url: string; icon: any }[]; label: string } =
		$props();
</script>

<Sidebar.GroupLabel class="text-lg">{label}</Sidebar.GroupLabel>
<Sidebar.GroupContent>
	<Sidebar.Menu>
		{#each items as item (item.title)}
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>
					{#snippet child({ props })}
						<a href={item.url} {...props}>
							<item.icon />
							<span>{item.title}</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		{/each}
	</Sidebar.Menu>
</Sidebar.GroupContent>
