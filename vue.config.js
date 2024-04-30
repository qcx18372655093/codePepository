const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           // 将 requireConfigFile 设置为 false
  //           requireConfigFile: false
  //         }
  //       }
  //     },
  //   ]
  // }
});
