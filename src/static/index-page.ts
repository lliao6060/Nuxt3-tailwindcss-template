import type { demoPage } from '~/common/types'

export const demoComponents: demoPage[] = [
  {
    name: 'Menu',
    path: 'menu',
  },
  {
    name: 'Modal',
    path: 'modal',
  },
  {
    name: 'Tabs',
    path: 'tabs',
  },
]

export const demoPageList: demoPage[] = [
  {
    name: 'Pinia',
    value: 'pinia',
    path: 'pinia',
  },
  {
    name: '鑲套路由',
    value: 'nested',
    path: 'nested',
  },
  {
    name: '不同layout',
    value: 'different-layout',
    path: 'different-layout',
  },
  {
    name: '動態路由',
    value: 'user',
    path: 'user',
  },
  {
    name: 'UseState',
    value: 'counter-increment',
    path: 'counter/increment',
  },
  {
    name: 'UseFeatch',
    value: 'use-featch',
    path: 'use-featch',
  },
  {
    name: 'Mock Api',
    value: 'mock-api',
    path: 'mock-api',
  },
]
