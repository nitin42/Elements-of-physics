import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

import pkg from './package.json'

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
}

const ensureArray = maybeArr =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr]

const createConfig = ({ output, min = false, env } = {}) => ({
  input: './simulator/index.js',
  output: ensureArray(output).map(format =>
    Object.assign({}, format, {
      name: 'elements',
      exports: 'named',
      globals: {
        react: 'React'
      }
    })
  ),
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]),
  plugins: [
    babel({ plugins: ['external-helpers'] }),
    env && replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    min && uglify()
  ].filter(Boolean)
})

export default [
  createConfig({
    output: [{ file: pkg.module, format: 'es' }]
  })
]
