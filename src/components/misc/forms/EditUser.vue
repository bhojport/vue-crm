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
// @TODO:
// Use CreateUser.vue rather

import { eventHub } from '@/hub'
import {
  EVENT_EDIT_USER
} from '@/events'

export default {
  props: ['id', 'user'],
  created() {
    eventHub.$on(EVENT_EDIT_USER, this.onUpdateUser)
  },
  methods: {
    onUpdateUser() {
      this.$store.dispatch('updateUser', { id: this.id, user: this.user }).then(() =>{
        window.$('#edit-user-modal').modal('hide')
      })
    }
  }
}
</script>

