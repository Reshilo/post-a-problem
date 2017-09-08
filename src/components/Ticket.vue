<template>
    <form @submit.prevent="submit()">
        <input v-model="ticket.subject">
        <textarea v-model="ticket.comment.body"></textarea>
        <button>Submit</button>
    </form>
</template>

<script>
  export default {
    data: function () {
      return {
        ticket: {
          subject: '',
          comment: {
            body: ''
          }
        }
      }
    },
    methods: {
      submit: function () {
        var this_ = this
        this_.$http.post('https://probprob.zendesk.com/api/v2/tickets.json', {
          ticket: this.ticket
        }, {
          headers: { Authorization: 'Bearer ' + this_.$auth.getToken() }
        }).then(function (response) {
          this_.response = response
        })
      }
    }
  }
</script>