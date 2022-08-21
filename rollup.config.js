import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/DevToolsPlugin.js',
  output: {
    file: 'build/DevToolsPlugin.js',
    format: 'iife'
  },
  plugins: [nodeResolve({
    resolveOnly: ['jscodeshift', '@puppeteer/replay']
  }), commonjs()]
};
