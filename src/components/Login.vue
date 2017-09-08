<template>
  <div>
  <button v-on:click="auth()" class="btn btn-primary">Login with ZenDesk</button>
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</template>

<script>
export default {
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
}
</script>