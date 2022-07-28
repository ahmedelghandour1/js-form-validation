import { rmSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { build as esBuild } from 'esbuild'
import { buildBanner } from './banner.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mode = process.env.NODE_ENV;
const watch = process.env.WATCH;



const baseConfig = (src) => {
    /**  @type {import('esbuild').BuildOptions}  */
    const config = {
        entryPoints: [src],
        loader: { ".ts": 'ts' },
        minify: mode === 'production',
        watch: !!watch,
        banner: {
            js: buildBanner(),
        }
    }

    return config;
}


const browserESMBuild = () => {
    /**  @type {import('esbuild').BuildOptions}  */
    const config = {
        platform: 'browser',
        outfile: resolve(__dirname, '../dist/build.esm.mjs'),
        loader: { ".ts": 'ts' },
        bundle: true,
        sourcemap: 'inline',
        treeShaking: true,
        format: 'esm',
        define: {
            FileOutput: mode !== 'production' && "'dist/browser/build.esm.js'"
        }
    }

    if (mode === 'development') {
        config.watch = {
            onRebuild(error, result) {
                if (error) console.error('watch build failed:', error)
                else console.log('watch build succeeded: build.esm.js')
            },
        }
    }

    return config;
}

/**  
 * @param {import('esbuild').BuildOptions} params  */
const build = (params) => {
    esBuild(params)
        .then((result) => console.log(`⚡ ${mode === 'production' ? 'done' : 'watching'}...`, result))
        .catch((err) => {
            console.log(err);
        });

}


rmSync(resolve(__dirname, '../dist'), { force: true, recursive: true });


build({
    ...baseConfig(resolve(__dirname, '../src/app.ts')),
    ...browserESMBuild()
})
