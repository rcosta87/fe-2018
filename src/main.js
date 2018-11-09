// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Formulario from './components/main.vue'
Vue.component('formulario-wrap', Formulario)
import Navigation from './components/navigation.vue'
Vue.component('nav-forms', Navigation)
import Send from "./components/send.vue"
Vue.component('send-btn', Send)
import NavInnter from './components/nav-inner.vue'
Vue.component('nav-inner', NavInnter)
import NavInnterEdit from './components/nav-inner-edit.vue'
Vue.component('nav-inneredit', NavInnterEdit)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App,
    },
    template: '<App/>'
})