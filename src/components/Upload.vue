<template>
    <file-upload :url='url' :thumb-url='thumbUrl' :headers="headers" @change="onFileChange" @success="onSuccess"></file-upload>
</template>

<script>
  export default {
    name: 'upload',
    data () {
      return {
        url: 'https://probprob.zendesk.com/api/v2/uploads.json?filename=' + new Date().getTime(),
        headers: {
          'Authorization': 'Bearer ' + this.$auth.getToken()
        },
        filesUploaded: []
      }
    },
    methods: {
      onFileChange (file) {
      },
      thumbUrl: function (file) {
      },
      onSuccess: function (e) {
        console.log('onSuccess', e.target.response.upload)
      }
    }
  }
</script>