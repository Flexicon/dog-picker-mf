import { registerApplication, start } from 'single-spa'
import * as isActive from './activity-functions'

registerApplication({
  name: '@flexicondev/dog-nav',
  app: () => System.import('dog-nav'),
  activeWhen: (location) => true,
})

registerApplication({
  name: '@flexicondev/dog-history',
  app: () => System.import('dog-history'),
  activeWhen: (location) => {
    return location.pathname === '/' || location.pathname.indexOf('/history') === 0
  },
})

registerApplication({
  name: '@flexicondev/dog-rating',
  app: () => System.import('dog-rating'),
  activeWhen: (location) => {
    return location.pathname.indexOf('/rating') === 0
  },
})

start()
