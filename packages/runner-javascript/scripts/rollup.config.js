// #region imports
    // #region libraries
    import replace from '@rollup/plugin-replace';
    import json from '@rollup/plugin-json';
    import commonjs from '@rollup/plugin-commonjs';
    import ttypescript from 'ttypescript';
    import typescript from 'rollup-plugin-typescript2';
    import { terser } from 'rollup-plugin-terser';
    // #endregion libraries


    // #region external
    import pkg from '../package.json';
    // #endregion external
// #endregion imports



// #region module
const production = process.env.NODE_ENV === 'production';


const common = {
    plugins: [
        replace(
            {
                preventAssignment: true,
                'process.env.ESRUN_PATH': production
                    ? `'../../.bin/esrun'`
                    : `'../node_modules/.bin/esrun'`,
                'process.env.RUNNER_VERSION': `'${pkg.version}'`,
            },
        ),
        json(),
        commonjs(),
        typescript({
            typescript: ttypescript,
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        terser({
            mangle: false,
            compress: false,
            format: {
                beautify: true,
                comments: false,
            },
        }),
    ],
};


const cli = {
    input: './source/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
        },
    ],
    external: [
        'os',
        'path',
        'fs',
        'child_process',

        '@balsamic/esrun',
        'commander',
        'esbuild',
    ],
    plugins: [
        ...common.plugins,
    ],
};
// #endregion module



// #region exports
export default [
    cli,
];
// #endregion exports
