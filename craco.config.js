const CracoAntDesignPlugin = require("craco-antd");
import { basicColor } from "./src/config/color";

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": `${basicColor}`,
        },
      },
    },
  ],
};
