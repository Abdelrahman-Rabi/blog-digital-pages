import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
import App from './App.vue'

// Assumes you have a router.ts file in the src/router directory
import router from './router'

import { useAuth0 } from './composables/useAuth0'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: quasarIconSet,
  config: {
    brand: {
      primary: '#1976D2',
      secondary: '#26A69A',
      accent: '#9C27B0',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
})

myApp.use(router)

const { provideAuth0 } = useAuth0();

provideAuth0({
  domain: process.env.VUE_APP_AUTH0_DOMAIN as string,
  client_id: process.env.VUE_APP_AUTH0_CLIENT_ID as string,
});

// Assumes you have a div with id="app" in your index.html
myApp.mount('#app')
