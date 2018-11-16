<template>
  <form>
    <div class="form-group">
      <label for="fullname">Full Name</label>
      <input type="text" class="form-control" id="fullname" placeholder="Enter full name..." v-model="user.fullname">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" placeholder="Enter email address..." v-model="user.email">
    </div>
    <div class="form-group">
      <label for="location">Location</label>
      <input type="text" class="form-control" id="location" placeholder="Enter full address..." v-model="user.location">
    </div>
  </form>
</template>

<script>
import { eventHub } from '@/hub'
import {
  EVENT_ADD_NEW_USER,
} from '@/events'

export default {
  created() {
    eventHub.$on(EVENT_ADD_NEW_USER, this.onCreateUser)
  },
  data: function() {
    return {
      user: {}
    }
  },
  methods: {
    onCreateUser() {
      this.$store.dispatch('addNewUser', this.user).then(() => {
        this.user = {}
        window.$('#create-user-modal').modal('hide')
      })
    },
  }
}
</script>

