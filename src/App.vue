<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  $font-default: "Muli",
  sans-serif;
  $blue: #5b8ffb;
  $blue-dark: #0035a1;
  $grey-light: #f9f9f9;
  $pink: #ff2874;
  $white: #fff;
  body {
    font-family: $font-default;
    h1 {
      color: $blue;
    }
    .flex-wrap {
      display: flex;
      align-items: center;
    }
    .checkbox-group {
      label {
        width: calc(100% - 40px);
        padding-left: 10px;
      }
    }
    .form {
      background-color: $grey-light;
      padding: 20px;
      .btn-primary, .btn {
        background-color: $blue;
        color: $white;
        border: none;
        &:hover {
          background-color: $blue-dark;
          transition: ease all .2;
        }
      }
      .form-control {
        border: none;
      }
      .form-group-link {
        a {
          display: block;
          color: $pink;
        }
      }
    }
  }
</style>
