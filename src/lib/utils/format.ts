import * as prettier from 'prettier/standalone'
import * as htmlPlugin from 'prettier/plugins/html'
import * as babelPlugin from 'prettier/plugins/babel'
import * as estreePlugin from 'prettier/plugins/estree'

export async function formatHtml(source: string): Promise<string> {
	return prettier.format(source, {
		parser: 'html',
		plugins: [htmlPlugin],
		printWidth: 100,
	})
}

export async function formatJson(source: string): Promise<string> {
	return prettier.format(source, {
		parser: 'json',
		plugins: [babelPlugin, estreePlugin],
	})
}
