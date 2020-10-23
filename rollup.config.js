import {terser} from "rollup-plugin-terser";

// https://rollupjs.org/guide/en#big-list-of-options
export default [
    // ES2015 Minified
    {
        input:   './index.js',
        output:  {
            file:      './dist/index.min.js',
            format:    'iife',
            name:      'takeFirstNoneFalsyValueOrLast',
            compact:   true,
            sourcemap: true,
        },
        plugins: [
            terser(),
        ]
    },
    // ES2015 None-Minified
    {
        input:  './index.js',
        output: {
            file:      './dist/index.js',
            format:    'iife',
            name:      'takeFirstNoneFalsyValueOrLast',
            compact:   false,
            sourcemap: true,
        }
    },
    // ES Modules Minified
    {
        input:   './index.js',
        output:  {
            file:      './dist/index.esm.min.js',
            format:    'esm',
            compact:   true,
            sourcemap: true,
        },
        plugins: [
            terser(),
        ]
    },
    // ES Modules None-Minified
    {
        input:  './index.js',
        output: {
            file:      './dist/index.esm.js',
            format:    'esm',
            compact:   false,
            sourcemap: true,
        },
    },
    // Node Module
    {
        input:  './index.js',
        output: {
            file:    './dist/index.cjs.js',
            format:  'cjs',
            name:    'takeFirstNoneFalsyValueOrLast',
            exports: 'default',
        },
    },
];
