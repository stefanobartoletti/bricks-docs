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
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'G-5RSCHK9FFB',
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    }
  },
})