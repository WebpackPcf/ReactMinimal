# React Minimal
A minimal project for creating react pcf controls using webpack-pcf-plugin

# Get started
Install dependencies

```
npm install
```

To build simply run

```
npm run build
```

You can find the solution inside the out/controls/ folder named "solution.zip". Also make sure to increase the version number in version.ts before releasing a new version

To debug locally using the pcf-scripts harness open 2 terminals

Terminal 1

```
npm run watch
```

Terminal 2

```
npm run harness
```

To develop using fiddler deploy once, setup fiddler to redirect to your bundle.js and use

```
npm run watch
```

HMR is not supported