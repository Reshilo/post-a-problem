<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-inverse">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link :to="{ name: 'ticket_list'}" class="navbar-brand"><img src="../../static/img/logo.png" alt="slika"></router-link>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'ticket_create'}" class="btn btn-secondary my-2 my-sm-0">
                Prijavi problem
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  created: function () {
    if (this.$auth.isAuthenticated()) {
      this.$router.push({name: 'ticket_list'})
    } else {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>
  .navbar {
    margin-bottom: 15px;
  }
</style>
