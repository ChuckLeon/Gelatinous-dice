export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "gelatinous-dice",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "This is a fun RPG dice roller. While searching for a simple dice roller, I found that most of them are not really good looking. So here is my take on a dice roller :). Easy and simple to use. Perfect for Dungeons and Dragons, Pathfinder, Vampire 5th or any other RPG needing dice rolling!! Have fun",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/site.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  image: {
    // Options
  },
};
