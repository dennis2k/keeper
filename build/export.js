// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    'extensions.js',
    "jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js", 
    "jspm_packages/npm/materialize-css@0.97.8/dist/js/materialize.min.js", 
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    "jspm_packages/github/systemjs/**",
    "locales/**",
    'styles/styles.css'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      // include font-awesome.css and its fonts files
      'font-awesome', [
        '/css/font-awesome.min.css',
        '/fonts/*'
      ]
    ], [
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ], [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ], [
      'materialize-css', [
        '/dist/js/materialize.min.js',
        '/dist/fonts/*'
      ]
    ]
  ]
};
