<template>
  <div>
    <h1>
      <router-link :to="{ name: 'app'}">Reshilo</router-link>
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created: function () {
    //this.$router.go('list')
  }
}
</script>