import Vue from 'vue'
import App from './App.vue';
import '../node_modules/normalize.css/normalize.css';
import router from './router'
import { mixin } from './mixin';
import { translate } from './mixin';

Vue.config.productionTip = false

Vue.mixin({
  created() {
    const data = this.$data.labels;
    if (data) {
      this.$data.labels = mixin;
    }
  }
})

Vue.filter('translate', translate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
