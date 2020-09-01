const { src } = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

const transpileCss = () =>
  src("./src/assets/scss/**/*.scss").pipe(sass().on("error", sass.logError));

exports.transpileCss = transpileCss;
