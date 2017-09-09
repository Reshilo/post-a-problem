<template>
    <div>
        <p>Your tickets</p>
        <router-link :to="{ name: 'ticket_create'}" class="btn btn-default">Create</router-link>
        <ul class="">
            <li v-for="ticket in tickets">
                <span>{{ticket.id}}</span>
                <span>{{ticket.subject}}</span>
                <router-link :to="{ name: 'ticket', params: { id: ticket.id }}" class="btn btn-default">Details</router-link>
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