const path = require("path");
const nodeExternals = require("webpack-node-externals");

const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/public");

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['react', '@babel/preset-env'],
      plugins: ['transform-class-properties']
    }
  }
}

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'server.js': path.resolve(__dirname, './server/server.js')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
}

const clientConfig = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}

module.exports = [serverConfig, clientConfig];
