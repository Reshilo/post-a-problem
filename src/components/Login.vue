<template>
<div>
  <h1>Prijavi se</h1>
  <div class="form-group">
    <button v-on:click="auth()" class="btn btn-primary">Login with ZenDesk</button>
  </div>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" id="email-login" name="email" placeholder="email">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="password-login" name="password" placeholder="lozinka">
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">uloguj se</button>
    </div>
    <div class="form-group-link">
      <a href="javascript:;">Zaboravili ste lozinku?</a>
      <a href="javascript:;">Niste registrovani?</a>
    </div>
  </form>
</div>
</template>
<script>
export default {
<<<<<<< HEAD
data: function () {
return {
response: null
}
},
methods: {
auth: function () {
if (this.$auth.isAuthenticated()) {
this.$auth.logout()
}
this.response = null
var this_ = this
this.$auth.authenticate('zendesk').then(function (authResponse) {
console.log(authResponse)
console.log(this_.$auth.isAuthenticated())
this_.$http.get('https://probprob.zendesk.com/api/v2/users/me.json').then(function (response) {
this_.response = response
})
}).catch(function (err) {
this_.response = err
})
}
}
=======
  data: function () {
    return {
      response: null
    }
  },
  created: function () {
    if (this.$auth.isAuthenticated()) {
      window.location = '/#/'
    }
  },
  methods: {
    auth: function () {
      if (this.$auth.isAuthenticated()) {
        this.$auth.logout()
      }

      this.response = null

      var this_ = this
      this.$auth.authenticate('zendesk').then(function (authResponse) {
        console.log(authResponse)
        console.log(this_.$auth.isAuthenticated())

        this_.$http.get('https://probprob.zendesk.com/api/v2/users/me.json', {
          headers: { Authorization: 'Bearer ' + this_.$auth.getToken() }
        }).then(function (response) {
          this_.response = response
        })
      }).catch(function (err) {
        this_.response = err
      })
    }
  }
>>>>>>> b5b4681d0c26f80e400f75a0c68d599fff73822f
}
</script>