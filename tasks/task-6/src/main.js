import Vue from 'vue'
import App from './App.vue'
import ServerManager from './components/ServerManager.vue'
import ServerDetails from './components/ServerDetails.vue'
import ServerList from './components/ServerList.vue'

Vue.component('server-list',ServerList);
Vue.component('server-manager',ServerManager);
Vue.component('server-details',ServerDetails);

export const serverBus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
