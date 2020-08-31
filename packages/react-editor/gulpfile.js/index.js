const { series, parallel, dest, watch } = require("gulp");
const { transpileCss } = require("./transpile-css");
const { cleanCSS } = require("./clean-css");
const { minifyCSS } = require("./minify-css");

const css = () =>
  transpileCss().pipe(minifyCSS()).pipe(dest("./src/assets/css"));

const buildCSS = series(cleanCSS, css);
const build = parallel(buildCSS);

exports.build = build;
exports.buildCSS = buildCSS;
