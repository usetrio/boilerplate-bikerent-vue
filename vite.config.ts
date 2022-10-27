import { URL, fileURLToPath } from 'node:url'

import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import { extname } from 'node:path'
import postcssExtend from 'postcss-extend-rule'
import postcssNesting from 'postcss-nesting'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // NOTE: this option is not documented on Vite, but it is possible to use additionalData as function
        // This helps to check what files we need to prepend CSS before parsing it. It is very useful for Vue components only.
        // @see https://github.com/vitejs/vite/blob/177b427b1b0c72b06bddd860d14ff119cb22431f/packages/vite/src/node/plugins/css.ts#L1401-L1408
        //
        // WARNING: This may change in vite future versions. Project is using vite@3.2.0
        additionalData(source: string, filename: string) {
          let additionalData = ''
          // Include clean stylesheet to add variables, mixins, functions and helpers to Vue <style> generated CSS.
          if (extname(filename) === '.vue') {
            additionalData = `
              @import '@/assets/scss/component.scss';
            `
          }

          return `${additionalData.trim()}\n${source}`
        }
      }
    },
    postcss: {
      // TODO: check postcss nesting plugin
      plugins: [autoprefixer, postcssExtend({ name: 'apply' }), postcssNesting()]
    }
  }
})
