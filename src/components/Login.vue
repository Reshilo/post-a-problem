<template>
    <div>
        Login
        <a v-on:click="auth('zendesk')">Login with ZenDesk</a>
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