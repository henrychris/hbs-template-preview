<script lang="ts">
	import HtmlEditor from '$lib/components/HtmlEditor.svelte';
	import JsonEditor from '$lib/components/JsonEditor.svelte';
	import Preview from '$lib/components/Preview.svelte';

	const VIEWS = ['Template', 'Context', 'Preview'] as const;
	let currentView = $state(0);

	function go(dir: -1 | 1) {
		currentView = (currentView + dir + VIEWS.length) % VIEWS.length;
	}
</script>

<!-- Mobile layout (≤ 768px) -->
<div class="flex h-dvh flex-col md:hidden">
	<nav
		class="flex shrink-0 items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2"
	>
		<button
			onclick={() => go(-1)}
			class="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-200 active:bg-gray-300"
			aria-label="Previous panel"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>

		<div class="flex flex-col items-center gap-1.5">
			<span class="text-sm font-semibold text-gray-700">{VIEWS[currentView]}</span>
			<div class="flex items-center gap-1.5">
				{#each VIEWS as view, i (view)}
					<button
						onclick={() => (currentView = i)}
						class="h-1.5 rounded-full transition-all duration-200 {i === currentView
							? 'w-4 bg-blue-500'
							: 'w-1.5 bg-gray-300'}"
						aria-label="Go to {view}"
					></button>
				{/each}
			</div>
		</div>

		<button
			onclick={() => go(1)}
			class="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-200 active:bg-gray-300"
			aria-label="Next panel"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M9 18l6-6-6-6" />
			</svg>
		</button>
	</nav>

	<div class="flex-1 overflow-hidden">
		<div class={currentView === 0 ? 'h-full' : 'hidden'}>
			<HtmlEditor />
		</div>
		<div class={currentView === 1 ? 'h-full' : 'hidden'}>
			<JsonEditor />
		</div>
		<div class={currentView === 2 ? 'h-full' : 'hidden'}>
			<Preview />
		</div>
	</div>
</div>

<!-- Desktop layout (> 768px) -->
<div class="hidden h-screen w-screen overflow-hidden md:flex">
	<div class="flex w-1/2 flex-col border-r border-gray-200">
		<div class="h-[60%] border-b border-gray-200">
			<HtmlEditor />
		</div>
		<div class="h-[40%]">
			<JsonEditor />
		</div>
	</div>
	<div class="w-1/2">
		<Preview />
	</div>
</div>
