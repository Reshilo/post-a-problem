<template>
  <div>
  <div class="form-group">
     <button v-on:click="auth('zendesk')" class="btn btn-primary">Login with ZenDesk</button>
  </div>
<form>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="email">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="password">
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
    methods: {
      auth: function (provider) {
        console.log(provider)
      }
    }
  }
</script>
