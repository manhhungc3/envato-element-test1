const { rtl, pfs, groupHover } = require("mota-css");
const config2 = require("./src/config.json");
const { config } = require("./server-config");
const { numberOfLines } = require("./mota-plugins/numberOfLines/numberOfLines");

module.exports = {
  input: ["./src/**/*.twig", "./src/**/*.js"],
  output: `${config.input}/${config.styles}/mota.scss`,
  plugins: [rtl(), pfs(), groupHover(), numberOfLines()],
  parentSelector: `.${config2.name}-wrapper`,
  breakpoints: {
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
};
