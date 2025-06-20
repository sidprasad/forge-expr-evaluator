const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'forge-expr-evaluator.bundle.js',
    library: 'ForgeExprEvaluator',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      // Provide browser-compatible fallbacks for Node.js modules
      "assert": false,
      "util": false,
      "stream": false,
      "buffer": false,
      "process": false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  target: 'web'
};
