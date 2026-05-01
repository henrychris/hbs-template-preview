<script lang="ts">
	let { onhelp }: { onhelp?: () => void } = $props();
</script>

<button
	onclick={onhelp}
	class="cursor-pointer rounded px-2 py-1 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
	aria-label="Help"
	title="Help"
>
	Need Help?
</button>
