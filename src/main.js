import Vue from 'vue'
import App from './App.vue'

import FjjButton from './components/Button.vue'
import FjjDialog from './components/Dialog.vue'

Vue.component(FjjButton.name, FjjButton)
Vue.component(FjjDialog.name, FjjDialog)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
