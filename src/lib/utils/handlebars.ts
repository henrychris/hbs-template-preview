import Handlebars from 'handlebars';

type CompileResult = { output: string; error: null } | { output: null; error: string };

export function compile(template: string, data: unknown): CompileResult {
	try {
		const fn = Handlebars.compile(template);
		const output = fn(data);
		return { output, error: null };
	} catch (e) {
		return { output: null, error: (e as Error).message };
	}
}
