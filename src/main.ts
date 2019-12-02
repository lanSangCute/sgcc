import Vue from 'vue';
import App from './App.vue';
import ElementUi from "element-ui";
//ztwComponent 引入
import "./ztwComponents/ztwUI";

import store from './store';
import router from './router';

import "./styles/main.scss";

Vue.config.productionTip = false;

Vue.use(ElementUi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
