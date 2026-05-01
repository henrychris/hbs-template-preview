<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';

	let { children } = $props();

	const title = 'Handlebars Playground';
	const description =
		'A live Handlebars.js templating playground - for email. Write email templates with Handlebars placeholders, provide JSON context, and see the rendered output in real time.';

	const image = $derived(`${page.url.origin}/Handlebars.png`);
	const url = $derived(page.url.href);
</script>

<svelte:head>
	<title>{title}</title>

	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<meta name="description" content={description} />

	<!-- Open Graph (Facebook, WhatsApp, Google) -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:site_name" content={title} />

	<!-- Twitter / X Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>

{@render children()}
