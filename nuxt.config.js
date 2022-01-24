export default {
  target: 'static',
  router: {
    base: '/test-front/'
  },
  head: {
    title: 'Duotek [Test]',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'normalize.css/normalize.css',
    './assets/styles/global.scss',
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  build: {
  }
}
