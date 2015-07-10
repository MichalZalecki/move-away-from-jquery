var config = {
  entry: './src/app',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}

module.exports = config;
