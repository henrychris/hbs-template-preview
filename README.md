# Handlebars + HTML Playground

A live email templating playground powered by [Handlebars.js](https://handlebarsjs.com/). Write your HTML template, supply a JSON context, and see the rendered output update in real time.

**Live demo:** [hbs.henryihenacho.com](https://hbs.henryihenacho.com)

## Features

- **HTML + Handlebars editor** — syntax-highlighted CodeMirror editor with a Format button
- **JSON context editor** — supply template data as plain JSON
- **Live preview** — rendered output updates as you type, displayed in a sandboxed iframe
- **Responsive layout** — three-panel swipeable view on mobile, split-pane on desktop

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

## Contributing

### Open an issue first

Before starting any work, [open an issue](../../issues/new) to describe what you want to build or fix. This keeps implementation details visible and lets the approach get agreed on before any code is written.

### Branch structure

| Branch                  | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `master`                | Production                               |
| `development`           | Staging                                  |
| `feat/*`, `fix/*`, etc. | Feature branches, cut from `development` |

### Workflow

1. Cut a feature branch from `development`:
   ```sh
   git checkout development
   git pull origin development
   git checkout -b feat/your-feature
   ```
2. Raise a PR from your feature branch → `development`, squash merge.
3. Raise a PR from `development` → `master`, squash merge.
4. After merging to `master`, rebase `development` onto `master` (do **not** back-merge):
   ```sh
   git checkout development
   git pull origin development
   git rebase origin/master
   git push --force-with-lease origin development
   ```

### Pull request checklist

Every PR should answer three questions — the [PR template](.github/PULL_REQUEST_TEMPLATE.md) will prompt you:

- **Why this PR** — what problem does it solve? Link the issue.
- **What does this PR do** — a concise summary of the changes.
- **How can this PR be tested** — step-by-step instructions for the reviewer.
