/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/images',
        destination: 'images',
      },
    },
    browsersync: {
      port: 3051,
      ui: {
        port: 3052,
      },
      // set one server
      // startPath: '/builder/',
      // server: {
      //   baseDir: 'build_local',
      //   routes: {
      //     '/builder/': './build_local/',
      //   },
      // },
    },
    posthtml: {
      fetch: {
        got: {}, // pass options to the `got` package
        preserveTag: true, // default false
        expressions: {}, // configure expressions in fetch context
      }
    }
  },
}
