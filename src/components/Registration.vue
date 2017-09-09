<template>
  <div>
  <h1>Registruj se</h1>
<form>
  <div class="form-group">
    <input type="text" class="form-control" id="name" name="name" placeholder="ime">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="last-name" name="last-name" placeholder="prezime">
  </div>
   <div class="form-group">
    <input type="text" class="form-control" id="email-register" name="email" placeholder="email">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="password-register" name="password" placeholder="password">
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Registruj se</button>
  </div>
  <div class="form-group-link">
    <a href="javascript:;">Uloguj se</a>
  </div>
</form>
</div>
</template>

<script>
  export default {
    created: function () {
      if (this.$auth.isAuthenticated()) {
        this.$router.push('/')
      }
    }
  }
</script>
