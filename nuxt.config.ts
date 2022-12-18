
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
 app: {

  head: {
    title :'name shop',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content:'width=device-width, initial-scale=1'},
      {hid: 'description', name:'description', content:''},
      {hid: 'keywords', name:'keywords', content:''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon',href:'/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css' }
    ],
  },

  pageTransition: { name: 'page', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' },
},
 

  css:[
    `assets/sass/style.sass`
  ],
  
  modules: [['nuxt-swiper', {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'],
  }]],
 

  plugins:[
    
  ],

  components:true,

})
