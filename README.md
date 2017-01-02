# aurelia nodejs express mongodb (typescript)

## Running The App

To run the app, follow these steps.
```shell
jspm install
npm install
typings install
cd src/server && npm install
gulp
```

Deploy
```shell
npm install
jspm install
typings install
cd src/server && forever start server.js
cd src/server && npm install
gulp
```