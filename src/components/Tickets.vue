<template>
    <div>
        <p>Your ticekts</p>
        <ul class="">
            <li v-for="ticket in tickets">
                <span>{{ticket.id}}</span>
                <span>{{ticket.subject}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
        tickets: []
      }
    },
    created: function () {
      if (!this.$auth.isAuthenticated()) {
        window.location = '/#/login'
      }

      var this_ = this
      this_.$http.get('https://probprob.zendesk.com/api/v2/tickets.json', {
        headers: {
          Authorization: 'Bearer ' + this_.$auth.getToken()
        }
      }).then(function (response) {
        this_.tickets = response.body.tickets
      })
    }
  }
</script>