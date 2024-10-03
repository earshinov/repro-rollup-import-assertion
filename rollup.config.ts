import pkg from './package.json' with { type: 'json' };

export default {
  input: 'src/index.mjs',
  output: [{ file: pkg.exports['.'].import, format: 'es', sourcemap: true }]
};
