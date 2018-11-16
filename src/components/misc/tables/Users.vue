<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">
          Status
        </th>
        <th scope="col">
          <span class="btn p-0 d-inline" @click="sortBy('fullname', 'asc')">&#x25B2;</span>
          <span class="btn p-0 d-inline" @click="sortBy('fullname', 'desc')">&#x25BC;</span>
          <span class="btn p-0 d-inline font-weight-bold" @click="sortBy('fullname')">Users</span>
        </th>
        <th scope="col">
          <span class="btn p-0 d-inline" @click="sortBy('email', 'asc')">&#x25B2;</span>
          <span class="btn p-0 d-inline" @click="sortBy('email', 'desc')">&#x25BC;</span>
          <span class="btn p-0 d-inline font-weight-bold" @click="sortBy('email')">Email</span>
        </th>
        <th scope="col">
          <span class="btn p-0 d-inline" @click="sortBy('location', 'asc')">&#x25B2;</span>
          <span class="btn p-0 d-inline" @click="sortBy('location', 'desc')">&#x25BC;</span>
          <span class="btn p-0 d-inline font-weight-bold" @click="sortBy('location')">Location</span>
        </th>
        <th scope="col">
          Last Activity
        </th>
        <th scope="col">
          Actions
        </th>
      </tr>
    </thead>
    <tbody v-if="getUsersList.length">
      <tr v-for="(user, index) in getUsersList" :key="index">
        <th scope="row" class="text-info">{{ getStatus() }}</th>
        <td>{{ user.fullname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.location }}</td>
        <td>{{ getLastActivity() }}</td>
        <td>
          <!-- <router-link :to="{name: 'user', params: { id: index }}" tag="button" class="btn btn-primary mr-1">View</router-link> -->
          <router-link :to="{name: 'user', params: { id: index }}" tag="button" class="btn btn-primary mr-1">View</router-link>
          <button class="btn btn-primary mr-1" @click="editUser(index, user)">Edit</button>
          <button class="btn btn-danger" @click="deleteUser(index)">Delete</button>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="5">No user created! Please create a new user first to list them here.</td>
      </tr>
    </tbody>
  </table>
  <crm-modal :modalId="'edit-user-modal'" :isModalOnly="true" :modalTitle="'Edit user'" :buttonText="'Edit'" :okButtonText="'Update'" :closeButtonText="'Cancel'" :okEvent="events.editUser">
    <crm-edit-form :user="user" :id="id"></crm-edit-form>
  </crm-modal>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Modal from '@/components/modal/Modal.vue'
import EditUserForm from '@/components/misc/forms/EditUser.vue'
import { EVENT_EDIT_USER } from '@/events'

export default {
  components: {
    crmModal: Modal,
    crmEditForm: EditUserForm
  },
  data: function() {
    return {
      lastActivity: [
        'active now',
        'few seconds ago',
        '2 minutes ago',
        '10 minutes ago', 
        '1 hour ago',
        '6 hours ago',
        '3 days ago',
        '1 month ago'
      ],
      events: {
        editUser: EVENT_EDIT_USER
      },
      id: '',
      user: {},
    }
  },
  computed: {
    // Bhojendra Note:
    // instead of the following,
    // better to have getUsersList in the vuex store -> getters
    
    /* ...mapGetters([
      'getUsers',
      'getFilteredUsers',
      'isSearched'
    ]),
    getUsersList() {
      return this.isSearched ? this.getFilteredUsers : this.getUsers
    } */

    // now, just:
    ...mapGetters([
      'getUsersList'
    ])
  },
  methods: {
    getStatus() { // fake status
      return Math.round(Math.random()) ? 'Online' : 'Offline'
    },
    getLastActivity() { // fake activity
      return this.lastActivity[Math.floor(Math.random() * this.lastActivity.length)]
    },
    editUser(id, user) {
      this.id = id
      this.user = user
      window.$('#edit-user-modal').modal('show')
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id)
    },
    sortBy(field, order) {
      this.$store.dispatch('sortUsers', {field, order})
    }
  }
}
</script>
