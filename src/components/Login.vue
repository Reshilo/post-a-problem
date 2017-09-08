<template>
  <div>
  <a v-on:click="auth('zendesk')">Login with ZenDesk</a>
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
    <label for="formGroupExampleInput2">Another label</label>
    <input type="submit" class="form-control" placeholder="login">
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