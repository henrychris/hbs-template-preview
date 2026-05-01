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

			<!-- External links -->
			<section class="flex flex-wrap gap-2 pb-1">
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
				<a
					href="https://github.com/henrychris/hbs-template-preview"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-800"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="13"
						height="13"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
						/>
					</svg>
					View on GitHub
				</a>
			</section>
		</div>
	</div>
</div>
