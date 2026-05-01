<script lang="ts">
	let { onclose }: { onclose: () => void } = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop button (click-outside to close) -->
<button
	class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
	onclick={onclose}
	aria-label="Close help"
	tabindex="-1"
></button>

<!-- Panel (sits above backdrop) -->
<div class="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Help"
		tabindex="-1"
		class="pointer-events-auto relative flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
	>
		<!-- Header -->
		<div class="flex items-center justify-between border-b border-gray-200 px-5 py-4">
			<div>
				<h2 class="text-base font-semibold text-gray-800">Handlebars Playground</h2>
				<p class="text-xs text-gray-400">Live email templating in your browser</p>
			</div>
			<button
				onclick={onclose}
				class="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
				aria-label="Close help"
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
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			</button>
		</div>

		<!-- Scrollable body -->
		<div class="space-y-5 overflow-y-auto px-5 py-4 text-sm text-gray-700">
			<!-- What is this? -->
			<section>
				<p class="leading-relaxed text-gray-600">
					Write an HTML email template using <a
						href="https://handlebarsjs.com"
						target="_blank"
						rel="noopener noreferrer"
						class="font-medium text-orange-500 underline underline-offset-2 hover:text-orange-600"
						>Handlebars.js</a
					> syntax, supply your data as JSON, and see the rendered output update live — no build step,
					no server.
				</p>
			</section>

			<!-- How to use -->
			<section>
				<h3 class="mb-2.5 text-xs font-semibold tracking-wide text-gray-400 uppercase">
					How to use
				</h3>
				<ol class="space-y-2.5">
					<li class="flex gap-3">
						<span
							class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600"
							>1</span
						>
						<span
							><span class="font-medium text-gray-800">Template</span> — write your HTML with
							Handlebars placeholders like
							<code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-700"
								>{'{{name}}'}</code
							>.</span
						>
					</li>
					<li class="flex gap-3">
						<span
							class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600"
							>2</span
						>
						<span
							><span class="font-medium text-gray-800">Context</span> — supply the template data as
							a JSON object, e.g.
							<code class="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs text-gray-700"
								>{'{"name":"Alice"}'}</code
							>.</span
						>
					</li>
					<li class="flex gap-3">
						<span
							class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600"
							>3</span
						>
						<span
							><span class="font-medium text-gray-800">Preview</span> — the rendered output updates as
							you type. Handlebars errors are shown inline.</span
						>
					</li>
				</ol>
			</section>

			<!-- Syntax quick-reference -->
			<section>
				<h3 class="mb-2.5 text-xs font-semibold tracking-wide text-gray-400 uppercase">
					Syntax quick-reference
				</h3>
				<div
					class="space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-3 font-mono text-xs text-gray-700"
				>
					<div class="flex flex-col gap-0.5">
						<span class="text-orange-500">{'{{variable}}'}</span>
						<span class="pl-1 text-gray-400">Output a variable (HTML-escaped)</span>
					</div>

					<div class="border-t border-gray-200"></div>

					<div class="flex flex-col gap-0.5">
						<span class="text-orange-500">{'{{{html}}}'}</span>
						<span class="pl-1 text-gray-400">Output raw / unescaped HTML</span>
					</div>

					<div class="border-t border-gray-200"></div>

					<div class="flex flex-col gap-0.5">
						<span class="text-orange-500">{'{{#if condition}} … {{else}} … {{/if}}'}</span>
						<span class="pl-1 text-gray-400">Conditional block</span>
					</div>

					<div class="border-t border-gray-200"></div>

					<div class="flex flex-col gap-0.5">
						<span class="text-orange-500">{'{{#each items}} … {{/each}}'}</span>
						<span class="pl-1 text-gray-400"
							>Loop — use <span class="text-orange-400">{'{{this}}'}</span> for the current item,
							<span class="text-orange-400">{'{{@index}}'}</span> for its index</span
						>
					</div>

					<div class="border-t border-gray-200"></div>

					<div class="flex flex-col gap-0.5">
						<span class="text-orange-500">{'{{!-- comment --}}'}</span>
						<span class="pl-1 text-gray-400">Comment (not rendered)</span>
					</div>
				</div>
			</section>

			<!-- External link -->
			<section class="pb-1">
				<a
					href="https://handlebarsjs.com/guide/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-medium text-orange-600 transition-colors hover:bg-orange-100 hover:text-orange-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="13"
						height="13"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
					Full Handlebars.js documentation
				</a>
			</section>
		</div>
	</div>
</div>
