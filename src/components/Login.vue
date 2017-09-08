<template>
  <div>
  <button v-on:click="auth('zendesk')" class="btn btn-primary">Login with ZenDesk</button>
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
    <button type="submit" class="btn btn-primary">Submit</button>
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