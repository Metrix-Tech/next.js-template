module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
