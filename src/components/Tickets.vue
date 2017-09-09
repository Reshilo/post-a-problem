<template>
    <div>
        <h2>Your Tickets</h2>
        <div class="list-group">
            <router-link v-for="ticket in tickets" :to="{ name: 'ticket', params: { id: ticket.id }}" :key="item.id" class="list-group-item list-group-item-action">
                {{ticket.subject}}
            </router-link>
        </div>
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
        this.$router.push('/login')
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