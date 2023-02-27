const path = require('path')

module.exports = {
  entry: { //arquvios de entrada
    index: './src/index.js',
    hello: './src/hello.js'
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'public'), // home/joao/project/../public
    filename: '[name].bundle.min.js' // usar o [name] só quando tiver mais de um arquivo de entrada para fazer a saida
  }
}