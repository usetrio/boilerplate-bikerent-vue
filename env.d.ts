/// <reference types="vite/client" />

import type { AxiosError, AxiosInterceptorOptions, AxiosRequestConfig } from 'axios'
import type { PluginCreator } from 'postcss'

declare module 'pinia' {
  export interface MapStoresCustomization {
    suffix: ''
  }
}

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

declare global {
  type Maybe<T> = T | null | undefined
  interface Bike {
    id: number
    candidateId: number
    name: string
    type: string
    bodySize: number
    maxLoad: number
    rate: number
    description: string
    ratings: number
    imageUrls: string[]
    cardImage?: string
    city?: string
  }

  type AxiosRequestInterceptor = [
    ((value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>)?,
    ((error: ant) => any)?,
    AxiosInterceptorOptions?
  ]

  type AxiosResponseInterceptor = [
    ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>)?,
    ((error: AxiosError) => Promise<never>)?,
    AxiosInterceptorOptions?
  ]
}
