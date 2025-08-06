const { defineConfig } = require("@vue/cli-service");
const path = require("path");
// module.exports = defineConfig({
//   transpileDependencies: true
// });

module.exports = {
  lintOnSave: false,
  outputDir: path.resolve(__dirname, "../backend/restaurant_management"),
  devServer: {
    proxy: {
      "/": {
        target: "https://restaurant-ordering-system-c28u.onrender.com",
      },
    },
  },
};
