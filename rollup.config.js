import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'ComoNorth',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    plugins: [
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        babel({
            exclude: 'node_modules/**',
            extensions,
        }),
        resolve(),
        commonjs(),
        terser(),
    ],
};
