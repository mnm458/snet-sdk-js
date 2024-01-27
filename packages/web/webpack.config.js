const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    library: {
      type: "module",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: ["process", "process/browser"],
    }),

    // new webpack.DefinePlugin({
    //   "process.env.NODE_DEBUG": JSON.stringify("false"),
    //   "process.env": JSON.stringify("false"),
    //   "process.argv": JSON.stringify("false"),
    // }),
  ],

  experiments: {
    outputModule: true,
  },
  resolve: {
    alias: {
      "singularitynet-token-contracts": path.resolve(
        __dirname,
        "node_modules/singularitynet-token-contracts"
      ),
      "singularitynet-platform-contracts": path.resolve(
        __dirname,
        "node_modules/singularitynet-platform-contracts"
      ),
      "@helia/json": path.resolve(__dirname, "node_modules/@helia/json"),
      winston: path.resolve(__dirname, "node_modules/winston"),
      ethjs: path.resolve(__dirname, "node_modules/ethjs"),
      web3: path.resolve(__dirname, "node_modules/web3"),
      "bignumber.js": path.resolve(__dirname, "node_modules/bignumber.js"),
      "@ethereumjs/tx": path.resolve(__dirname, "node_modules/@ethereumjs/tx"),
      lodash: path.resolve(__dirname, "node_modules/lodash"),
    },
    symlinks: true,
    fallback: {
      buffer: require.resolve("buffer/"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      url: require.resolve("url/"),
      fs: false,
      process: require.resolve("process/browser"),

      util: "util/",
      console: "console-browserify",
      constants: "constants-browserify",
      domain: "domain-browser",
      events: "events/",
      path: "path-browserify",
      punycode: "punycode/",
      querystring: "querystring-es3",
      stream: "stream-browserify",
      // _stream_duplex: "readable-stream/duplex",
      // _stream_passthrough: "readable-stream/passthrough",
      // _stream_readable: "readable-stream/readable",
      // _stream_transform: "readable-stream/transform",
      // _stream_writable: "readable-stream/writable",
      // string_decoder: "string_decoder/",
      sys: "util/",
      timers: "timers-browserify",
      tty: "tty-browserify",
      vm: "vm-browserify",
      zlib: "browserify-zlib",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        resolve: {
          fullySpecified: false,
        },
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "core"), // Adjust this path to point to your core directory
        ],

        use: "babel-loader",
      },
    ],
  },
  mode: "development",
};
