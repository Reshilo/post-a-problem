<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link :to="{ name: 'app'}" class="navbar-brand">Reshilo</router-link>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'ticket_create'}" class="btn btn-secondary my-2 my-sm-0">
                Create Ticket
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
      this.$router.push('/tickets/list')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .navbar {
    margin-bottom: 15px;
  }
</style>