<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { json } from '@codemirror/lang-json';
	import { editorManager } from '$lib/stores/editor.svelte';
	import posthog from 'posthog-js';

	function handleFormat() {
		posthog.capture('context_formatted');
		editorManager.formatJson();
	}
</script>

<div class="flex h-full flex-col">
	<div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
		<div>
			<h2 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">Context</h2>
			<p class="text-xs text-gray-400">JSON</p>
		</div>
		<button
			onclick={handleFormat}
			disabled={editorManager.jsonError !== null}
			class="rounded px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
		>
			Format
		</button>
	</div>
	<div class="min-h-0 flex-1 overflow-scroll">
		<CodeMirror
			class="h-full"
			value={editorManager.json}
			onchange={(v) => (editorManager.json = v)}
			lang={json()}
			placeholder={'{ "name": "Henry", "count": 3 }'}
			styles={{
				'&': { height: '100%', fontSize: '13px' },
				'.cm-scroller': { overflow: 'auto', fontFamily: 'ui-monospace, monospace' }
			}}
		/>
	</div>
	{#if editorManager.jsonError}
		<p class="border-t border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600">
			{editorManager.jsonError}
		</p>
	{/if}
</div>
