<script lang="ts">
	import { editorManager } from '$lib/stores/editor.svelte';
</script>

<div class="flex h-full flex-col">
	<div class="border-b border-gray-200 bg-gray-50 px-4 py-2">
		<h2 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">Context</h2>
		<p class="text-xs text-gray-400">JSON</p>
	</div>
	<textarea
		class="flex-1 resize-none p-4 font-mono text-sm text-gray-800 outline-none placeholder:text-gray-300"
		placeholder={'{ "name": "Henry", "count": 3 }'}
		value={editorManager.json}
		oninput={(e) => (editorManager.json = e.currentTarget.value)}
		spellcheck={false}
	></textarea>
	{#if editorManager.jsonError}
		<p class="border-t border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600">
			{editorManager.jsonError}
		</p>
	{/if}
</div>
