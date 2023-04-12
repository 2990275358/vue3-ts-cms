// const path = require('path')
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        views: "@/views",
        components: "@/components"
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    devServe: {
      proxy: {
        "^api/": {
          target: "http://152.136.185.210:5000/",
          pathRewrite: {
            "^api/": ""
          },
          changeOrigin: true
        }
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
}
