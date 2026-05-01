<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { html } from '@codemirror/lang-html';
	import { editorManager } from '$lib/stores/editor.svelte';
	import posthog from 'posthog-js';

	function handleFormat() {
		posthog.capture('template_formatted');
		editorManager.formatHtml();
	}
</script>

<div class="flex h-full flex-col">
	<div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
		<div>
			<h2 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">Template</h2>
			<p class="text-xs text-gray-400">HTML + Handlebars</p>
		</div>
		<button
			onclick={handleFormat}
			class="rounded px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
		>
			Format
		</button>
	</div>
	<div class="min-h-0 flex-1 overflow-scroll">
		<CodeMirror
			class="h-full"
			value={editorManager.html}
			onchange={(v) => (editorManager.html = v)}
			lang={html()}
			placeholder={'<h1>Hello, {{name}}!</h1>\n<p>You have {{count}} messages.</p>'}
			styles={{
				'&': { height: '100%', fontSize: '13px' },
				'.cm-scroller': { overflow: 'auto', fontFamily: 'ui-monospace, monospace' }
			}}
		/>
	</div>
</div>
