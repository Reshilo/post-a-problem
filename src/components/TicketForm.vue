<template>
    <div>
        <h2>Create Ticket</h2>
        <form @submit.prevent="submit()">
            <div class="form-group">
                <input v-model="ticket.subject" class="form-control" placeholder="Type Subject here">
            </div>
            <div class="form-group">
                <input type="file" accept="image/*" v-on:change="handleAttachmentChange" class="form-control">
            </div>
            <div class="form-group">
                <textarea v-model="ticket.comment.body" class="form-control"
                          placeholder="Type more details here"></textarea>
            </div>
            <button :disabled="disabled" class="btn btn-primary btn-lg">Submit</button>
        </form>
        <pre>{{ticket}}</pre>
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
          type: 'problem'
        }
      }
    },
    created: function () {
      if (!this.$auth.isAuthenticated()) {
        this.$router.push({name: 'login'})
      }

      var that = this

      if (!navigator.geolocation) {
        console.warn('No geolocation')
      } else {
        navigator.geolocation.getCurrentPosition(function (position) {
          that.lat = position.coords.latitude
          that.lng = position.coords.longitude
        }, function (error) {
          console.log(error)
        })
      }

      /*
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
        that.$el.querySelector('video').srcObject = stream
      }

      function handleError (error) {
        console.log('Error: ', error)
      }
      */

    },
    methods: {
      submit: function () {
        var this_ = this
        // this_.ticket.comment.body += this_.ticket.comment.map
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
            ticket: {
              subject: this_.ticket.subject || '[' + new Date().getTime() + ']',
              comment: {
                body: this_.ticket.comment.body || '[' + new Date().getTime() + ']',
                uploads: this_.ticket.comment.uploads
              },
              priority: this_.ticket.priority,
              type: this_.ticket.type,
              custom_fields: [
                {
                  id: 114098500393,
                  value: this_.lat
                },
                {
                  id: 114098538614,
                  value: this_.lng
                }
              ]
            }
          },
          {
            headers: {
              Authorization: 'Bearer ' + this_.$auth.getToken()
            }
          }
        ).then(function (response) {
          this_.response = response
          this_.$router.push({name: 'ticket', params: {id: response.body.ticket.id}})
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

        var that = this

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
          that.$el.querySelector('video').srcObject = stream
        }

        function handleError (error) {
          console.log('Error: ', error)
        }
      },
      takePicture: function () {

        var this_ = this
        var canvas = this.$el.querySelector('canvas')
        var context = canvas.getContext('2d')
        var photo = this.$el.querySelector('#photo')

        var width = 640    // We will scale the photo width to this
        var height = 480
        if (width && height) {
          canvas.width = width
          canvas.height = height
          context.drawImage(this.$el.querySelector('video'), 0, 0, width, height)

          var data = canvas.toDataURL('image/png')
          this_.ticket.image = data
          photo.setAttribute('src', data)
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
        let this_ = this
        let reader = new FileReader()
        reader.onloadend = function () {
          let url = 'https://probprob.zendesk.com/api/v2/uploads.json?filename=' + encodeURI(file.name)
          let headers = {
            'Authorization': 'Bearer ' + this_.$auth.getToken()
          }
          let fileUpload = new FileUpload(url, headers)
          fileUpload.upload(reader.result).then((e) => {
            console.warn(e.target.response.upload.attachment.width, e.target.response.upload.attachment.height)
            this_.addAttachment(e.target.response.upload.token)
          }).catch((e) => {
            this_.$emit('error', e)
          })
        }
        reader.readAsArrayBuffer(file)
      },
      addAttachment: function (token) {
        // this.ticket.comment.uploads.push(token)
        this.ticket.comment.uploads = [token]
        this.disabled = false
      }
    }
  }
</script>