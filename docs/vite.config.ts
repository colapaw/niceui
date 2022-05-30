import path from 'path'
import Unocss from 'unocss/vite'
import { MarkdownTransform } from './.vitepress/plugins/md-transform'

export default {
  resolve: {
    alias: {
      'hepta/': `${path.resolve(
        __dirname,
        '../dist/es'
      )}/`,
    },
  },
  plugins: [MarkdownTransform(), Unocss()],
}