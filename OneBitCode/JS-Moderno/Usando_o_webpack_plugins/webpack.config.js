const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'development',
  module: { //testando se ah algum arquivo css para fazer a junção
    rules: [{
      test: /\.css$/, // barra invertida para entender que o ponto é um caracter e nao uma expressao regular
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}