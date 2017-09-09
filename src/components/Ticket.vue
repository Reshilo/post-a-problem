<template>
    <div>
        <h1>
            {{ticket.subject}}
            <router-link :to="{ name: 'ticket_edit', params: { id: ticket.id }}" class="btn btn-secondary btn-sm">Edit</router-link>
        </h1>
        <div v-for="comment in comments">
            <p>
                <small class="text-muted">{{comment.created_at}}</small>
                <br>
                {{comment.body}}
            </p>
            <img v-for="attachment in comment.attachments" v-bind:src="attachment.content_url">
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        ticket: {},
        comments: []
      }
    },
    created: function () {
      let this_ = this;
      if (!this.isNew()) {
        if (!this.$auth.isAuthenticated()) {
          this.$router.push({name: 'login'})
        }
        let id = this.$route.params.id
        // get ticket
        this_.$http.get('https://probprob.zendesk.com/api/v2/tickets/' + id + '.json', {
          headers: {
            'Authorization': 'Bearer ' + this_.$auth.getToken()
          }
        }).then(function (response) {
          // success
          console.log(response)
          this.ticket = response.body.ticket
        }, function () {
          // error
        })

        // get comments
        this_.$http.get('https://probprob.zendesk.com/api/v2/tickets/' + id + '/comments.json', {
          headers: {
            'Authorization': 'Bearer ' + this_.$auth.getToken()
          }
        }).then(function (response) {
          // success
          console.log(response)
          this.comments = response.body.comments
        }, function () {
          // error
        })
      }
    },
    methods: {
      isNew: function () {
        !!this.$route.params.id
      }
    }
  }
</script>