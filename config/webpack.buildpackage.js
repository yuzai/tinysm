module.exports = {
    mode: "production",
    entry: {
      index: "./index.js",
    },
    output: {
      filename: "[name].js",
      libraryExport: "default",
      library: "tinysm",
      libraryTarget: "umd"
    }
};