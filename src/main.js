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
  baseUrl: 'https://probprob.zendesk.com/api/v2/',
  providers: {
    zendesk: {
      name: 'zendesk',
      url: '/auth/zendesk',
      authorizationEndpoint: 'https://probprob.zendesk.com/oauth/authorizations/new',
      requiredUrlParams: ['response_type', 'client_id', 'scope'],
      responseType: 'token',
      clientId: 'webapp',
      scope: ['read', 'write'],
      scopeDelimiter: ' ',
      redirectUri: 'http://localhost:8080/auth/callback',
      oauthType: '2.0',
      popupOptions: {width: 480, height: 640}
    }
  }
})

