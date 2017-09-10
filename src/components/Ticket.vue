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
            <div>
                <img v-bind:src="'https://maps.googleapis.com/maps/api/staticmap?center=' + ticket.position.lat + ',' + ticket.position.lng + '&zoom=13&size=600x300&maptype=roadmap&markers=' + ticket.position.lat + ',' + ticket.position.lng">
            </div>
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
          this.ticket = this.parse(response.body.ticket)
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
      },
      parse: function (object) {
        if (object.custom_fields) {
          object.position = {}
          object.custom_fields.forEach(function (field) {
            switch (field.id) {
              case 114098500393:
                object.position.lat = field.value
                break
              case 114098538614:
                object.position.lng = field.value
                break
            }
          })
        }
        return object
      }
    }
  }
</script>