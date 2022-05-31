const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    localePath: path.resolve("./public/locales"),
    defaultNS: "common",
    ns: ["common", "home", "pricing", "integrations", "successful-cases"],
  },
  reloadOnPrerender: true,
};
