import { compile } from '$lib/utils/handlebars';

class EditorManager {
	html = $state('');
	json = $state('{}');
	jsonError = $state<string | null>(null);
	renderError = $state<string | null>(null);

	get compiled(): string | null {
		let parsed: unknown;

		try {
			parsed = JSON.parse(this.json);
			this.jsonError = null;
		} catch {
			this.jsonError = 'Invalid JSON';
			return null;
		}

		const result = compile(this.html, parsed);

		if (result.error) {
			this.renderError = result.error;
			return null;
		}

		this.renderError = null;
		return result.output;
	}
}

export const editorManager = new EditorManager();
