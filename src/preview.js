// import Vue from 'vue';
import App from './App';

const { Vue } = global;

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});


console.log('plugin', app);
