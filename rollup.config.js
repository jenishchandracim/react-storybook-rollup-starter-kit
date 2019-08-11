import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import commonjs from 'rollup-plugin-commonjs';
import image from 'rollup-plugin-img';
import replace from 'rollup-plugin-replace';

import pkg from './package.json';

export default [{
  input: 'src/components/index.js',
  output: {
    dir: pkg.main,
    format: 'cjs',
    name: 'index'
  },
  external: [
    'react',
    'react-dom',
    'react-proptypes'
  ],
  plugins: [
    image(),
    resolve({
      browser: true
    }),
    postcss({
      extensions: ['.css'],
      plugins: [
        autoprefixer()
      ]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      include: 'src/**/*.js',
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Children', 'ReactComponent', 'PureComponent', 'FunctionComponent', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    })
  ]
}];
