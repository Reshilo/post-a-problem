<template>
  <div>
<form action="/" method="get" class="form">
  <div class="checkbox-group flex-wrap">
    <input type="checkbox" id="checkbox1">
    <label for="checkbox1">Ugasi notifikacije</label>
</div>
<div class="checkbox-group flex-wrap">
  <input type="checkbox" id="checkbox2">
  <label for="checkbox2">Ugasi podstenik o rešenim slučajevima</label>
  <button type="submit" class="btn">Izloguj se</button>
</div>
</form>
<a href="javascript:;" class="back-link">Vrati se nazad</a>
</div>
</template>

<script>
  export default {
    created: function () {
      if (!this.$auth.isAuthenticated()) {
        this.$router.push({name: 'login'})
      }
    }
  }
</script>
