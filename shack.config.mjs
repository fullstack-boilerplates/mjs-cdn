export default {
  entry: './web/index.js',
  module: {
    rules: [
      {
        test: /[/|\\]apis[/|\\].*\.((m|c)?jsx?|tsx?)$/,
        use: {
          loader: '@shack-js/loader-fetch',
          options: {
            apiPrefix: process.env.RUNNER_BASE + '/apis',
            backendFolder: 'apis',
            sourceType: 'module'
          }
        }
      }
    ]
  }
}