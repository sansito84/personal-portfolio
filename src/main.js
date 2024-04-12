import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createI18n } from 'vue-i18n'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'animate.css';
import { Icon } from '@iconify/vue';


const app = createApp(App)
const i18n = createI18n({
    locale: 'es',
    // something vue-i18n options here ...
})

app.use(Icon)

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 3,
    newestOnTop: true
  });
  

app.use(i18n)
app.use(BootstrapVue3)
app.mount('#app')
