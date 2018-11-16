<template>
  <div id="crm-dashboard">
    <crm-cards>
      <template slot="header">
        <crm-users-form></crm-users-form>
      </template>
      <template slot="footer">
        <crm-pagination></crm-pagination>
      </template>
      <crm-users-table></crm-users-table>
    </crm-cards>
  </div>
</template>

<script>
import Cards from '@/components/cards/Cards.vue'
import { UsersForm, UsersTable, Pagination } from '@/components/misc'

export default {
  components: {
    crmCards: Cards,
    crmUsersForm: UsersForm,
    crmUsersTable: UsersTable,
    crmPagination: Pagination,
  }
}
</script>
