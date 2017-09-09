<template>
  <div>
    <h1>Post-a-Problem</h1>
    <a class="btn btn-default" href="/#/login">login</a>
    <button v-on:click="test()">Test</button>
  </div>
</template>

<script>
export default {
  created: function () {
    if (!this.$auth.isAuthenticated()) {
      window.location = '/#/login'
    }
  }
}
</script>