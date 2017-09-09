<template>
    <div>
      <form @submit.prevent="submit()">
          <input v-model="ticket.subject">
          <input type="file" accept="image/*" v-on:change="handleAttachmentChange">
          <textarea v-model="ticket.comment.body"></textarea>
          <pre v-bind="ticket"></pre>
          <button :disabled="disabled">Submit</button>
      </form>
      <!-- <button @click="turnCameraOn()">Turn camera on</button> -->
      <!-- <button @click="takePicture()">Take picture</button>
      <video muted autoplay></video>
      <img id="photo"></img>
      <canvas></canvas> -->
    </div>
</template>

<script>
  import FileUpload from '../FileUpload'

  export default {
    data: function () {
      return {
        disabled: true,
        ticket: {
          subject: '',
          comment: {
            body: '',
            uploads: []
          },
          priority: 'high',
          type: 'problem',
          map: '',
          image: ''
        }
      }
    },
    created: function () {
        var that = this;

        var gl = navigator.geolocation
        gl.getCurrentPosition(function(position) {
          var href = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=15&size=1200x1200&sensor=false";
          href += '&markers=color:blue%7Clabel:S%7C' + position.coords.latitude + ',' + position.coords.longitude
          var mapLink = '<a href="' + href + '">map</a>'
          that.ticket.map = mapLink
        }.bind(this))

          navigator.mediaDevices.enumerateDevices()
          .then(gotDevices).then(getStream).catch(handleError)

          function gotDevices (deviceInfos) {
            // debugger
            for (var i = 0; i !== deviceInfos.length; ++i) {
              var deviceInfo = deviceInfos[i]
              var option = document.createElement('option')
              option.value = deviceInfo.deviceId
              if (deviceInfo.kind === 'videoinput') {
                option.text = deviceInfo.label || 'camera '
                // console.log(deviceInfo.deviceId);
              } else {
                // console.log('Found ome other kind of source/device: ', deviceInfo)
              }
            }
          }

          function getStream () {
            if (window.stream) {
              window.stream.getTracks().forEach(function (track) {
                track.stop()
              })
            }

            var constraints = {
              // audio: {
              //   optional: [{
              //     sourceId: audioSelect.value
              //   }]
              // },
              video: {
                optional: [{
                  sourceId: '5de6cee12c0d739ddf2dc492f37908e4f0c9d46e079a2af7f6a49d994e29ac5f'
                }]
              }
            }

            navigator.mediaDevices.getUserMedia(constraints)
              .then(gotStream).catch(handleError)
          }

          function gotStream (stream) {
            window.stream = stream // make stream available to console
            // videoElement.srcObject = stream
            that.$el.querySelector('video').srcObject = stream;
          }

          function handleError (error) {
            console.log('Error: ', error)
          }
      if (!this.$auth.isAuthenticated()) {
        window.location = '/#/login'
      }
    },
    methods: {
      submit: function () {
        var this_ = this
        this_.ticket.comment.body += this_.ticket.comment.map
        // var uploadUrl = 'https://probprob.zendesk.com/api/v2/uploads.json?filename=' + this_.ticket.subject + '.png'
        // this_.$http.post(uploadUrl, {
        //   data: this_.ticket.image
        // }, {
        //   headers: {
        //     Authorization: 'Bearer ' + this_.$auth.getToken(),
        //     'Content-Type': 'application/binary',
        //     'Content-Length': this_.ticket.image.size
        //   }
        // }).then(function (response){

        //   var token = response.body.upload.token
        //   this_.ticket.comment.uploads = [token]

        // })
        this_.$http.post('https://probprob.zendesk.com/api/v2/tickets.json', {
            ticket: this_.ticket
          }, {
            headers: {
              Authorization: 'Bearer ' + this_.$auth.getToken()
            }
          }).then(function (response) {
            this_.response = response
          })

      },
      details: function (id) {
        var this_ = this
        var url = 'https://probprob.zendesk.com/api/v2/tickets/' + id + '.json'
        console.log(url)
        this_.$http.get(url, {
          headers: {
            Authorization: 'Bearer ' + this_.$auth.getToken()
          }
        }).then(function (response) {
          console.log(response)
        })
      },
      turnCameraOn: function () {

        var that = this;

          navigator.mediaDevices.enumerateDevices()
          .then(gotDevices).then(getStream).catch(handleError)

          function gotDevices (deviceInfos) {
            // debugger
            for (var i = 0; i !== deviceInfos.length; ++i) {
              var deviceInfo = deviceInfos[i]
              var option = document.createElement('option')
              option.value = deviceInfo.deviceId
              if (deviceInfo.kind === 'videoinput') {
                option.text = deviceInfo.label || 'camera '
                // console.log(deviceInfo.deviceId);
              } else {
                // console.log('Found ome other kind of source/device: ', deviceInfo)
              }
            }
          }

          function getStream () {
            if (window.stream) {
              window.stream.getTracks().forEach(function (track) {
                track.stop()
              })
            }

            var constraints = {
              // audio: {
              //   optional: [{
              //     sourceId: audioSelect.value
              //   }]
              // },
              video: {
                optional: [{
                  sourceId: '5de6cee12c0d739ddf2dc492f37908e4f0c9d46e079a2af7f6a49d994e29ac5f'
                }]
              }
            }

            navigator.mediaDevices.getUserMedia(constraints)
              .then(gotStream).catch(handleError)
          }

          function gotStream (stream) {
            window.stream = stream // make stream available to console
            // videoElement.srcObject = stream
            that.$el.querySelector('video').srcObject = stream;
          }

          function handleError (error) {
            console.log('Error: ', error)
          }
      },
      takePicture: function () {

          var this_ = this
          var canvas = this.$el.querySelector('canvas')
          var context = canvas.getContext('2d');
          var photo = this.$el.querySelector('#photo')

          var width = 640;    // We will scale the photo width to this
          var height = 480;
          if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(this.$el.querySelector('video'), 0, 0, width, height);

            var data = canvas.toDataURL('image/png');
            this_.ticket.image = data;
            photo.setAttribute('src', data);
          } else {
            // clearphoto();
          }

      },
      handleAttachmentChange: function (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.uploadAttachment(files[0])
      },
      uploadAttachment: function (file) {
        let url = 'https://probprob.zendesk.com/api/v2/uploads.json?filename=' + file.name
        let headers = {
          'Authorization': 'Bearer ' + this.$auth.getToken()
        }
        let fileUpload = new FileUpload(url, headers)
        fileUpload.upload(file).then((e) => {
          this.addAttachment(e.target.response.upload.token)
        }).catch((e) => {
          this.$emit('error', e)
        })
      },
      addAttachment: function (token) {
        // this.ticket.comment.uploads.push(token)
        this.ticket.comment.uploads = [token]
        this.disabled = false
      }
    }
  }
</script>