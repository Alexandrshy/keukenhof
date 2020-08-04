import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

import pkg from '../../package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/index.ts',
    output: [
        {
            file: `./example/${pkg.main}`,
            format: 'umd',
            name: 'Keukenhof',
        },
        {
            file: `./example/${pkg.module}`,
            format: 'es',
            name: 'Keukenhof',
        },
    ],
    plugins: [
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions,
        }),
        resolve(),
        commonjs(),
        serve({
            open: true,
            openPage: '/',
            host: 'localhost',
            port: 3003,
            contentBase: ['./example'],
        }),
        livereload({
            watch: ['./example'],
            exts: ['html', 'js', 'css'],
        }),
    ],
};
