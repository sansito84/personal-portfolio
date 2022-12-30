import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createI18n } from 'vue-i18n'


import './src/assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
const i18n = createI18n({
    locale: 'es',
    // something vue-i18n options here ...
})

app.use(i18n)
app.use(BootstrapVue3)
app.mount('#app')