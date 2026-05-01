<script lang="ts">
	import HtmlEditor from '$lib/components/HtmlEditor.svelte';
	import JsonEditor from '$lib/components/JsonEditor.svelte';
	import Preview from '$lib/components/Preview.svelte';
</script>

<div class="flex h-screen w-screen overflow-hidden">
	<!-- Left column: Template (60%) + Context (40%) -->
	<div class="flex w-1/2 flex-col border-r border-gray-200">
		<div class="h-[60%] border-b border-gray-200">
			<HtmlEditor />
		</div>
		<div class="h-[40%]">
			<JsonEditor />
		</div>
	</div>

	<!-- Right column: Preview (full height) -->
	<div class="w-1/2">
		<Preview />
	</div>
</div>
