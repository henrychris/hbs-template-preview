<script lang="ts">
	import { editorManager } from '$lib/stores/editor.svelte';
</script>

<div class="flex h-full flex-col">
	<div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
		<div>
			<h2 class="text-sm font-semibold tracking-wide text-gray-600 uppercase">Template</h2>
			<p class="text-xs text-gray-400">HTML + Handlebars</p>
		</div>
		<button
			onclick={() => editorManager.formatHtml()}
			class="rounded px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
		>
			Format
		</button>
	</div>
	<textarea
		class="flex-1 resize-none p-4 font-mono text-sm text-gray-800 outline-none placeholder:text-gray-300"
		placeholder={'<h1>Hello, {{name}}!</h1>\n<p>You have {{count}} messages.</p>'}
		value={editorManager.html}
		oninput={(e) => (editorManager.html = e.currentTarget.value)}
		spellcheck={false}
	></textarea>
</div>
