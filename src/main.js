// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:4000',
  providers: {
    zendesk: {
      name: 'zendesk',
      url: '/auth/zendesk',
      authorizationEndpoint: 'https://www.zendesk.com/oauth/v2/authorization',
      redirectUri: null,
      requiredUrlParams: ['state'],
      scope: ['r_emailaddress'],
      scopeDelimiter: ' ',
      state: 'STATE',
      oauthType: '2.0',
      popupOptions: { width: 527, height: 582 }
    }
  }
})
