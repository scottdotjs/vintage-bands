import esbuild from 'esbuild'
import sveltePlugin from 'esbuild-svelte'
import minimist from 'minimist-lite'

const argv = minimist(process.argv.slice(2))

const OUT_DIR = './web/js/'

esbuild
	.build({
		entryPoints: [ './src/app.js' ],
		outdir:      OUT_DIR,
		format:      'esm',
		minify:      argv.mode === 'production' ? true : false,
		bundle:      true,
		splitting:   true,
		sourcemap:   'external',
		plugins:     [ sveltePlugin() ],
	})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})
