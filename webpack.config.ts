import type * as webpack from 'webpack';
import * as path from 'path';
import { WebpackPcfPlugin } from 'webpack-pcf-plugin/lib/index';
import controlManifests from './manifests';
import solutionSettings from './solution';

const config: webpack.Configuration = {
  entry: {
    'ExampleControl': './src/ExampleControl.ts',
  },
  output: {
    pathinfo: true,
    filename: '[name]/bundle.js',

    path: path.resolve(__dirname, 'out/controls/'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  plugins: [
    new WebpackPcfPlugin({ manifests: controlManifests, solution: solutionSettings }),
  ],

  mode: 'production',
  watch: false,
  watchOptions: {
    aggregateTimeout: 500,
  },
  module: {
    rules: [
      {
        // Tells webpack how to load files with TS or TSX extensions.
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: { onlyCompileBundledFiles: true },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.m?js$/,
        type: 'javascript/auto',
        resolve: { fullySpecified: false },
      },
    ],
  },
};


module.exports = config;
