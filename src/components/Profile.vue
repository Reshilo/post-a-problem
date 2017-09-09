<template>
  <div>
    <div class="first-half">
      <a href="javascript:;">Moj profil</a>
    </div>
    <div class="second-half">
      <a href="javascript:;">Podešavanja</a>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    created: function () {
      if (!this.$auth.isAuthenticated()) {
        this.$router.push('/login')
      }
    }
  }
</script>