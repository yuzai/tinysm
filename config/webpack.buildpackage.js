module.exports = {
    mode: "production",
    entry: {
      index: "./index.js",
    },
    output: {
      filename: "[name].js",
      library: "tinysm",
      libraryTarget: "umd"
    },
    externals: {
      react: 'react',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
};