const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'forge-expr-evaluator.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ForgeExprEvaluator',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      // Node.js polyfills for antlr4ts
      "assert": require.resolve("assert/"),
      "buffer": require.resolve("buffer/"),
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
      "os": false,
      "path": false,
      "fs": false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          }
        }
      }
    ]
  },
  mode: 'production',
  optimization: {
    minimize: true
  }
};