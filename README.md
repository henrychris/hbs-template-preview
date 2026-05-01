# hbs-template-preview

A live email templating playground powered by [Handlebars.js](https://handlebarsjs.com/). Write your HTML template, supply a JSON context, and see the rendered output update in real time.

**Live demo:** [hbs.henryihenacho.com](https://hbs.henryihenacho.com)

## Features

- ✏️ **HTML + Handlebars editor** — syntax-highlighted CodeMirror editor with a Format button
- 🗂️ **JSON context editor** — supply template data as plain JSON
- 👁️ **Live preview** — rendered output updates as you type, displayed in a sandboxed iframe
- 🚨 **Error reporting** — Handlebars compile/render errors are surfaced inline
- 📱 **Responsive layout** — three-panel swipeable view on mobile, split-pane on desktop

## Stack

- [SvelteKit](https://kit.svelte.dev/) + [Svelte 5](https://svelte.dev/)
- [Handlebars.js](https://handlebarsjs.com/)
- [CodeMirror 6](https://codemirror.net/) via [svelte-codemirror-editor](https://github.com/touchifyapp/svelte-codemirror-editor)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Bun](https://bun.sh/)

## Getting started

```sh
bun install
bun run dev
```

That's it.

## Usage

1. Write your Handlebars template in the **Template** panel, e.g.:
   ```html
   <h1>Hello, {{name}}!</h1>
   <p>You have {{count}} new messages.</p>
   ```
2. Provide matching data in the **Context** panel as JSON:
   ```json
   { "name": "Alice", "count": 3 }
   ```
3. The **Preview** panel renders the result live.

## Building

```sh
bun run build
bun run preview
```

The app is statically exported and deployed via GitHub Pages.
