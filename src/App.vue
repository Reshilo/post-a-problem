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
  $grey: #c1c1c1;
  $grey-medium: #e1e2fa;
  $pink: #ff2874;
  $pink-light: #f76e9f;
  $white: #fff;
  body {
    font-family: $font-default;
  }

  .navbar {
    background-color: $grey-medium;
    border: none;
    .container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .collapse {
    display: block;
  }

  .navbar-inverse .navbar-toggler {
    display: none;
  }

  .navbar-brand {
    width: 100px;
    img {
      width: 100%;
    }
  }

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

  .btn-secondary {
    background-color: $pink;
    border: none;
    color: $white;
  }

  .form {
    background-color: $grey-light;
    padding: 20px;
    .btn-primary,
    .btn {
      background-color: $blue;
      color: $white;
      border: none;
      padding: 12px 24px;
      margin-top: 1px;
      border-bottom-width: 3px;
      &:hover {
        background-color: $blue-dark;
        transition: ease all .2;
      }
      &:disabled,
      &.disabled {
        background-color: $grey;
      }
    }
    input[type="file"] {
      display: none;
    }
    input {
      font-family: $font-default;
      &::placeholder {
        font-family: $font-default;
      }
    }
    .file-upload {
      display: inline-block;
      cursor: pointer;
      background-color: $pink-light;
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
</style>
