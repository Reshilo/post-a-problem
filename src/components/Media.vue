<template>
<div>
  <form action="/" method="get" class="form">
    <div class="form-group">
      <input type="text" class="form-control" id="descrpition" name="descrpition" placeholder="Dodaj opis">
      <!-- <label for="descrpition">Dodaj opis</label> -->
      <button type="button" class="btn">Poništi</button>
      <button type="submit" class="btn">Pošalji</button>

    </div>
  </form>
  <video></video>
  <div class="bottom-menu">
    <ul>
      <li><a href="javascript:;"><img src="#" class="media-icon">foto</a></li>
      <li><a href="javascript:;"><img src="#" class="media-icon">video</a></li>
      <li><a href="javascript:;"><img src="#" class="media-icon">audio</a></li>
      <li><a href="javascript:;"><img src="#" class="media-icon">type</a></li>
    </ul>
  </div>
</div>
</template>
<script>
  export default {
    data: function () {
      return {
        response: null
      }
    },
    created: function () {
      if (this.$auth.isAuthenticated()) {
        this.$router.push('/')
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
          this_.$http.get('https://probprob.zendesk.com/api/v2/users/me.json', {
            headers: {
              Authorization: 'Bearer ' + this_.$auth.getToken()
            }
          }).then(function (response) {
            this_.response = response
            this_.$router.push('/')
          })
        }).catch(function (err) {
          this_.response = err
        })
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: orange;
  }
</style>
