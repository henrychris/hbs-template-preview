<script lang="ts">
	import { editorManager } from '$lib/stores/editor.svelte';
	import HelpButton from '$lib/components/HelpButton.svelte';

	let { onhelp }: { onhelp?: () => void } = $props();
</script>

<div class="flex h-full flex-col">
	<div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
		<div>
			<h2 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">Preview</h2>
			<p class="text-xs text-gray-400">Rendered output</p>
		</div>
		<div class="hidden md:block">
			<HelpButton {onhelp} />
		</div>
	</div>
	<div class="relative flex-1 overflow-hidden">
		{#if editorManager.renderError}
			<div class="m-4 rounded border border-red-300 bg-red-50 p-4">
				<p class="mb-1 text-xs font-semibold tracking-wide text-red-700 uppercase">
					Handlebars Error
				</p>
				<pre
					class="font-mono text-xs whitespace-pre-wrap text-red-600">{editorManager.renderError}</pre>
			</div>
		{:else}
			<iframe
				title="Email Preview"
				srcdoc={editorManager.compiled ?? ''}
				sandbox="allow-same-origin"
				class="h-full w-full border-none"
			></iframe>
		{/if}
	</div>
</div>
