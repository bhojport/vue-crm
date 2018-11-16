<template>
<div>
  <form>
      <div class="form-row">
        <div class="col-6">
          <input type="text" class="form-control" placeholder="Search users..." v-model="search">
        </div>
        <div class="col-2">
          <select class="custom-select" id="inputGroupSelect01" v-model="searchBy">
            <option disabled>Seaarch By</option>
            <option value="fullname" selected>User</option>
            <option value="email">Email</option>
            <option value="location">Location</option>
          </select>        
        </div>
        <div class="col-2 offset-2">
          <crm-modal :modalId="'create-user-modal'" :buttonText="'Create new user'" :okButtonText="'Create'" :closeButtonText="'Cancel'" :okEvent="events.addNewUser">
            <crm-create-form></crm-create-form>
          </crm-modal>
        </div>
      </div>
    </form>
</div>
</template>

<script>
import { eventHub } from '@/hub'
import {
  EVENT_ADD_NEW_USER,
  // EVENT_SEARCH_FILTER,
  // EVENT_SEARCH_FILTER_SEARCH_BY
} from '@/events'


import Modal from '@/components/modal/Modal.vue'
import CreateUserForm from './CreateUser.vue'

export default {
  components: {
    crmModal: Modal,
    crmCreateForm: CreateUserForm,
  },
  data: function() {
    return {
      search: '',
      searchBy: 'fullname',
      events: {
        addNewUser: EVENT_ADD_NEW_USER
      }
    }
  },
  created() {
    eventHub.$on(EVENT_ADD_NEW_USER, () => this.search = '')
  },
  watch: {
      // Bhojendra Note:
      // watcher should only be used with async operations
      // here I'm assuming users listed will be available through some api

      // Wait! but when to receive these events?
      // can be used in computed in listing but let's go other like stated below
      // hmmm, need to dispatch the event directly...

      // $emit is also required now, for knowing user is being searched
      // or pass props, in this case, the data is to be shared from another not parent component
      // so eventHub is the only way to do

      // or, we may simply use vuex store
      // thus, better to give it touched in vuex

      // ah, why not just update the users instead? going to try it
      // will not ... what at first load?

      // So, what is the good idea?
      // using vuex store,
      // but seems creating new user not showing
      // it's now showing only when searched state becomes true

      // @TODO: NEED TO FIND THE REASON AND RESOLVE IT
    
    search(value) {
      // eventHub.$emit(EVENT_SEARCH_FILTER)
      this.$store.dispatch('filterUsers', value)
    },
    searchBy(value) {
      // eventHub.$emit(EVENT_SEARCH_FILTER_SEARCH_BY, value)
      this.$store.dispatch('filterUsersByType', { filterType: value, search: this.search })
    }
  }
}
</script>

