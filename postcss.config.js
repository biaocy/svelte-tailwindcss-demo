// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  whitelist: ["toasts", "toast", "content", "progress"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),

    // enable for demonstration
    purgecss,
    // only needed if you want to purge
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ],
};
