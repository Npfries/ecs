import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts', 'src/cli.ts'],
	splitting: true,
	sourcemap: true,
	clean: true,
	format: ['cjs', 'esm'],
	target: 'es5',
	dts: true,
	minify: true,
	minifySyntax: true,
});
