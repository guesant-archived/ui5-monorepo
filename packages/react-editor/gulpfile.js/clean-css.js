const { src } = require("gulp");
const clean = require("gulp-clean");

const cleanCSS = () => src("./src/assets/css", { read: false }).pipe(clean());

exports.cleanCSS = cleanCSS;
