System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/app/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-api": "npm:aurelia-api@3.0.0",
    "aurelia-auth": "npm:aurelia-auth@3.0.4",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.8",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.3",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@0.20.6",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.1.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.1.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.2.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.1",
    "aurelia-validation": "npm:aurelia-validation@0.12.5",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "fetch": "github:github/fetch@1.1.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@1.2.1",
    "jquery": "npm:jquery@2.2.4",
    "martingust/aurelia-repeat-strategies": "github:martingust/aurelia-repeat-strategies@master",
    "materialize": "npm:materialize@1.0.0",
    "materialize-css": "npm:materialize-css@0.97.8",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:Dogfalo/materialize@0.97.8": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "npm:jquery@2.2.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:martingust/aurelia-repeat-strategies@master": {
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.2.0"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-api@3.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.8",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "extend": "npm:extend@3.0.0"
    },
    "npm:aurelia-auth@3.0.4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.0",
      "aurelia-router": "npm:aurelia-router@1.1.0"
    },
    "npm:aurelia-binding@1.1.0": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.8",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.1.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.2.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.1"
    },
    "npm:aurelia-dependency-injection@1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0"
    },
    "npm:aurelia-framework@1.0.8": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-http-client@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0"
    },
    "npm:aurelia-materialize-bridge@0.20.6": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-router": "npm:aurelia-router@1.1.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4",
      "jquery": "npm:jquery@2.2.4",
      "materialize": "github:Dogfalo/materialize@0.97.8"
    },
    "npm:aurelia-metadata@1.0.2": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-pal-browser@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.1.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-templating-binding@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-templating-resources@1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-templating-router@1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-templating@1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-validation@0.12.5": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.32"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:materialize-css@0.97.8": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "github:components/jquery@3.1.1"
    },
    "npm:materialize@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "app.js": [
      "./resources/toaster",
      "aurelia-auth",
      "aurelia-framework"
    ],
    "assets/asset-details.js": [
      "aurelia-templating-resources",
      "../tenants/tenant.service",
      "./asset.service",
      "./asset.model",
      "aurelia-framework",
      "aurelia-auth"
    ],
    "assets/asset-list.js": [
      "aurelia-router",
      "./asset.service",
      "./asset.model",
      "aurelia-framework",
      "aurelia-auth"
    ],
    "assets/asset.model.js": [
      "../resources/core.models"
    ],
    "assets/asset.service.js": [
      "../resources/api.service",
      "aurelia-framework",
      "./asset.model"
    ],
    "dashboard/dashboard.js": [
      "aurelia-framework",
      "../assets/asset.service"
    ],
    "layout/nav.js": [
      "../users/user.service",
      "../resources/broadcast.service",
      "aurelia-router",
      "aurelia-dependency-injection",
      "aurelia-auth"
    ],
    "login/login.js": [
      "../users/user.service",
      "../resources/toaster",
      "../resources/storage.service",
      "aurelia-auth",
      "aurelia-framework",
      "aurelia-router"
    ],
    "login/signup.js": [
      "../users/user.model",
      "../users/user.service",
      "aurelia-router",
      "aurelia-framework",
      "aurelia-validation",
      "aurelia-materialize-bridge"
    ],
    "main.js": [
      "./config",
      "fetch",
      "bootstrap"
    ],
    "payments/payment-grid.js": [
      "aurelia-router",
      "../resources/file.service",
      "aurelia-templating-resources",
      "./payment.model",
      "../assets/asset.model",
      "../assets/asset.service",
      "./payment.service",
      "aurelia-auth",
      "aurelia-dependency-injection"
    ],
    "payments/payment.model.js": [
      "../resources/period",
      "../resources/core.models"
    ],
    "payments/payment.service.js": [
      "../resources/criteria",
      "../resources/api.service",
      "aurelia-framework",
      "./payment.model"
    ],
    "profile/profile.js": [
      "aurelia-dependency-injection",
      "aurelia-auth"
    ],
    "resources/api.service.js": [
      "./upload.service",
      "./toaster",
      "./broadcast.service",
      "./caching.service",
      "./query",
      "./storage.service",
      "aurelia-dependency-injection",
      "aurelia-fetch-client",
      "../config"
    ],
    "resources/authentication.service.js": [
      "aurelia-auth"
    ],
    "resources/broadcast.service.js": [
      "aurelia-dependency-injection",
      "aurelia-event-aggregator"
    ],
    "resources/toaster.js": [
      "./broadcast.service",
      "aurelia-dependency-injection",
      "aurelia-materialize-bridge"
    ],
    "resources/upload.service.js": [
      "./api.service",
      "aurelia-dependency-injection",
      "aurelia-fetch-client",
      "../config"
    ],
    "tenants/tenant-list.js": [
      "./tenant.service",
      "./tenant.model",
      "aurelia-framework",
      "aurelia-auth"
    ],
    "tenants/tenant.model.js": [
      "../resources/core.models"
    ],
    "tenants/tenant.service.js": [
      "../resources/api.service",
      "aurelia-framework",
      "./tenant.model"
    ],
    "users/user.model.js": [
      "../resources/core.models"
    ],
    "users/user.service.js": [
      "../resources/storage.service",
      "./user.model",
      "../resources/api.service"
    ]
  },
  bundles: {
    "dist/app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "assets/asset-details.html!github:systemjs/plugin-text@0.0.8.js",
      "assets/asset-details.js",
      "assets/asset-list.html!github:systemjs/plugin-text@0.0.8.js",
      "assets/asset-list.js",
      "assets/asset.model.js",
      "assets/asset.service.js",
      "assets/recuring-item.html!github:systemjs/plugin-text@0.0.8.js",
      "assets/subject-item.html!github:systemjs/plugin-text@0.0.8.js",
      "config.js",
      "converters/currency.js",
      "converters/month.js",
      "converters/t.js",
      "dashboard/dashboard.html!github:systemjs/plugin-text@0.0.8.js",
      "dashboard/dashboard.js",
      "globals.js",
      "layout/nav.html!github:systemjs/plugin-text@0.0.8.js",
      "layout/nav.js",
      "login/login.html!github:systemjs/plugin-text@0.0.8.js",
      "login/login.js",
      "login/signup.html!github:systemjs/plugin-text@0.0.8.js",
      "login/signup.js",
      "main.js",
      "payments/payment-grid.html!github:systemjs/plugin-text@0.0.8.js",
      "payments/payment-grid.js",
      "payments/payment.model.js",
      "payments/payment.service.js",
      "profile/profile.html!github:systemjs/plugin-text@0.0.8.js",
      "profile/profile.js",
      "resources/api.service.js",
      "resources/authentication.service.js",
      "resources/broadcast.service.js",
      "resources/caching.service.js",
      "resources/core.enums.js",
      "resources/core.models.js",
      "resources/criteria.js",
      "resources/file.service.js",
      "resources/index.js",
      "resources/period.js",
      "resources/query.js",
      "resources/storage.service.js",
      "resources/toaster.js",
      "resources/upload.service.js",
      "shared/fab-button.html!github:systemjs/plugin-text@0.0.8.js",
      "shared/fab-button.js",
      "tenants/tenant-list.html!github:systemjs/plugin-text@0.0.8.js",
      "tenants/tenant-list.js",
      "tenants/tenant.model.js",
      "tenants/tenant.service.js",
      "users/user.model.js",
      "users/user.service.js"
    ],
    "dist/aurelia.js": [
      "github:components/jquery@3.1.1.js",
      "github:components/jquery@3.1.1/jquery.js",
      "github:github/fetch@1.1.1.js",
      "github:github/fetch@1.1.1/fetch.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-auth@3.0.4.js",
      "npm:aurelia-auth@3.0.4/aurelia-auth.js",
      "npm:aurelia-auth@3.0.4/auth-fetch-config.js",
      "npm:aurelia-auth@3.0.4/auth-filter.js",
      "npm:aurelia-auth@3.0.4/auth-service.js",
      "npm:aurelia-auth@3.0.4/auth-utilities.js",
      "npm:aurelia-auth@3.0.4/authentication.js",
      "npm:aurelia-auth@3.0.4/authorize-step.js",
      "npm:aurelia-auth@3.0.4/base-config.js",
      "npm:aurelia-auth@3.0.4/oAuth1.js",
      "npm:aurelia-auth@3.0.4/oAuth2.js",
      "npm:aurelia-auth@3.0.4/popup.js",
      "npm:aurelia-auth@3.0.4/storage.js",
      "npm:aurelia-binding@1.1.0.js",
      "npm:aurelia-binding@1.1.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.2.1.js",
      "npm:aurelia-dependency-injection@1.2.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.0.js",
      "npm:aurelia-fetch-client@1.1.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.8.js",
      "npm:aurelia-framework@1.0.8/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.2.0.js",
      "npm:aurelia-logging@1.2.0/aurelia-logging.js",
      "npm:aurelia-materialize-bridge@0.20.6.js",
      "npm:aurelia-materialize-bridge@0.20.6/autocomplete/autocomplete.js",
      "npm:aurelia-materialize-bridge@0.20.6/badge/badge.js",
      "npm:aurelia-materialize-bridge@0.20.6/box/box.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/breadcrumbs.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/breadcrumbs.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/breadcrumbs.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/instructionFilter.js",
      "npm:aurelia-materialize-bridge@0.20.6/button/button.js",
      "npm:aurelia-materialize-bridge@0.20.6/card/card.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/card/card.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/card/card.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel-item.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel.js",
      "npm:aurelia-materialize-bridge@0.20.6/char-counter/char-counter.js",
      "npm:aurelia-materialize-bridge@0.20.6/checkbox/checkbox.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/checkbox/checkbox.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chip.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chip.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chip.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chips.js",
      "npm:aurelia-materialize-bridge@0.20.6/click-counter.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/click-counter.js",
      "npm:aurelia-materialize-bridge@0.20.6/collapsible/collapsible.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-header.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-header.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-header.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-item.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-item.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/md-collection-selector.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/md-collection-selector.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/md-collection-selector.js",
      "npm:aurelia-materialize-bridge@0.20.6/colors/colorValueConverters.js",
      "npm:aurelia-materialize-bridge@0.20.6/colors/md-colors.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/colors/md-colors.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/attributeManager.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/attributes.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/constants.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/events.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/polyfills.js",
      "npm:aurelia-materialize-bridge@0.20.6/config-builder.js",
      "npm:aurelia-materialize-bridge@0.20.6/datepicker/datepicker-default-parser.js",
      "npm:aurelia-materialize-bridge@0.20.6/datepicker/datepicker.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown-element.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown-element.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown-fix.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown.js",
      "npm:aurelia-materialize-bridge@0.20.6/exports.js",
      "npm:aurelia-materialize-bridge@0.20.6/fab/fab.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/fab/fab.js",
      "npm:aurelia-materialize-bridge@0.20.6/file/file.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/file/file.js",
      "npm:aurelia-materialize-bridge@0.20.6/footer/footer.js",
      "npm:aurelia-materialize-bridge@0.20.6/index.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input-prefix.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input-update-service.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input.js",
      "npm:aurelia-materialize-bridge@0.20.6/modal/modal-trigger.js",
      "npm:aurelia-materialize-bridge@0.20.6/modal/modal.js",
      "npm:aurelia-materialize-bridge@0.20.6/navbar/navbar.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/navbar/navbar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/navbar/navbar.js",
      "npm:aurelia-materialize-bridge@0.20.6/pagination/pagination.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/pagination/pagination.js",
      "npm:aurelia-materialize-bridge@0.20.6/parallax/parallax.js",
      "npm:aurelia-materialize-bridge@0.20.6/progress/progress.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/progress/progress.js",
      "npm:aurelia-materialize-bridge@0.20.6/pushpin/pushpin.js",
      "npm:aurelia-materialize-bridge@0.20.6/radio/radio.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/radio/radio.js",
      "npm:aurelia-materialize-bridge@0.20.6/range/range.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/range/range.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/range/range.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollfire/scrollfire-patch.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollfire/scrollfire-target.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollfire/scrollfire.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollspy/scrollspy.js",
      "npm:aurelia-materialize-bridge@0.20.6/select/select.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav-collapse.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav.js",
      "npm:aurelia-materialize-bridge@0.20.6/slider/slider.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/slider/slider.js",
      "npm:aurelia-materialize-bridge@0.20.6/switch/switch.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/switch/switch.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/switch/switch.js",
      "npm:aurelia-materialize-bridge@0.20.6/tabs/tabs.js",
      "npm:aurelia-materialize-bridge@0.20.6/toast/toastService.js",
      "npm:aurelia-materialize-bridge@0.20.6/tooltip/tooltip.js",
      "npm:aurelia-materialize-bridge@0.20.6/transitions/fadein-image.js",
      "npm:aurelia-materialize-bridge@0.20.6/transitions/staggered-list.js",
      "npm:aurelia-materialize-bridge@0.20.6/validation/validationRenderer.js",
      "npm:aurelia-materialize-bridge@0.20.6/waves/waves.js",
      "npm:aurelia-materialize-bridge@0.20.6/well/md-well.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-metadata@1.0.2.js",
      "npm:aurelia-metadata@1.0.2/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.1.0.js",
      "npm:aurelia-pal-browser@1.1.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.2.0.js",
      "npm:aurelia-pal@1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.1.0.js",
      "npm:aurelia-router@1.1.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.1.0.js",
      "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.1.0.js",
      "npm:aurelia-templating-binding@1.1.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.2.0.js",
      "npm:aurelia-templating-resources@1.2.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.2.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.2.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.2.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.2.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.2.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.2.0/compose.js",
      "npm:aurelia-templating-resources@1.2.0/css-resource.js",
      "npm:aurelia-templating-resources@1.2.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.2.0/focus.js",
      "npm:aurelia-templating-resources@1.2.0/hide.js",
      "npm:aurelia-templating-resources@1.2.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.2.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.2.0/if.js",
      "npm:aurelia-templating-resources@1.2.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.2.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.2.0/repeat.js",
      "npm:aurelia-templating-resources@1.2.0/replaceable.js",
      "npm:aurelia-templating-resources@1.2.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.2.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/show.js",
      "npm:aurelia-templating-resources@1.2.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/with.js",
      "npm:aurelia-templating-router@1.0.1.js",
      "npm:aurelia-templating-router@1.0.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.1/route-href.js",
      "npm:aurelia-templating-router@1.0.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.1/router-view.js",
      "npm:aurelia-templating@1.1.4.js",
      "npm:aurelia-templating@1.1.4/aurelia-templating.js",
      "npm:aurelia-validation@0.12.5.js",
      "npm:aurelia-validation@0.12.5/aurelia-validation.js",
      "npm:aurelia-validation@0.12.5/implementation/rules.js",
      "npm:aurelia-validation@0.12.5/implementation/standard-validator.js",
      "npm:aurelia-validation@0.12.5/implementation/util.js",
      "npm:aurelia-validation@0.12.5/implementation/validation-messages.js",
      "npm:aurelia-validation@0.12.5/implementation/validation-parser.js",
      "npm:aurelia-validation@0.12.5/implementation/validation-rules.js",
      "npm:aurelia-validation@0.12.5/property-info.js",
      "npm:aurelia-validation@0.12.5/validate-binding-behavior.js",
      "npm:aurelia-validation@0.12.5/validate-trigger.js",
      "npm:aurelia-validation@0.12.5/validation-controller-factory.js",
      "npm:aurelia-validation@0.12.5/validation-controller.js",
      "npm:aurelia-validation@0.12.5/validation-error.js",
      "npm:aurelia-validation@0.12.5/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@0.12.5/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@0.12.5/validator.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:materialize-css@0.97.8.js",
      "npm:materialize-css@0.97.8/dist/css/materialize.css!github:systemjs/plugin-css@0.1.32.js",
      "npm:materialize-css@0.97.8/dist/js/materialize.js"
    ]
  }
});