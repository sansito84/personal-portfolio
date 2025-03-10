import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import i18n from './i18n';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'animate.css';
import { Icon } from '@iconify/vue';


const app = createApp(App)

// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', Icon)

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 3,
    newestOnTop: true
  });
  

app.use(i18n)
app.use(BootstrapVue3)
app.mount('#app')
