import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import MainPage from "./components/MainPage.vue";
import DetailsPage from "./components/DetailsPage.vue";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/detailed/:detailsId',
    name: 'detailed',
    component: DetailsPage,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
