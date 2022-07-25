import path from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { MarkdownTransform } from './.vitepress/plugins/md-transform'

export default defineConfig({
  vite: {
    plugins: [Unocss(), MarkdownTransform()],
  }
})
