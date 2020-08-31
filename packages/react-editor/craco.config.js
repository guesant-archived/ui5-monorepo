const { whenProd } = require("@craco/craco");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require("autoprefixer"),
        ...whenProd(
          () => [
            require("@fullhuman/postcss-purgecss")({
              content: [
                "./src/**/*.html",
                "./src/**/*.jsx",
                "./src/**/*.js",
                "./public/**/*.html",
              ],
            }),
          ],
          [],
        ),
      ],
    },
  },
};
