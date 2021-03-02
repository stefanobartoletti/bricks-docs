import { withDocus } from 'docus'

// Learn more at https://docus.dev
export default withDocus({
  docus: {
    colors: {
      primary: '#37c871',
      code: '#7137c8'
    }
  },
  pwa: {
    icon: {
      source: 'static/icon.png',
    },
    manifest :{
      name: 'Bricks Documentation',
      short_name: 'Bricks Documentation',
      description: 'A modular WordPress starter theme powered by Bootstrap and Gulp'
    }
  },
  modules: [
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-NNXNK4M'
  }
})