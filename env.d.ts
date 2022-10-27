/// <reference types="vite/client" />

import type { PluginCreator } from 'postcss'

declare module 'postcss-extend-rule' {
  type RuleOptions = 'remove' | 'ignore' | 'warn' | 'throw'
  declare type pluginOptions = {
    name?: string
    onFunctionalSelector?: RuleOptions
    onRecursiveExtend?: RuleOptions
    onUnusedExtend?: RuleOptions
  }

  declare const creator: PluginCreator<pluginOptions>

  export default creator
}
