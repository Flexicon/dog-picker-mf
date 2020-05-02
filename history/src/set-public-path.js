import { setPublicPath } from 'systemjs-webpack-interop'

if (!window || !window.isStandalone) {
  setPublicPath('dog-history')
}
