<template>
  <div id="vue-crm" class="container-fluid">
    <crm-header></crm-header>
    <div class="row main-wrapper">
      <aside class="col-3 border border-top-0 border-bottom-0 border-left-0">
        <crm-sidebar-left></crm-sidebar-left>
      </aside>
      <main class="col-9 p-3">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/common/header/Header.vue'
import SidebarLeft from './components/common/sidebar/Left.vue'

export default {
  name: 'VueCRM',
  components: {
    crmHeader: Header,
    crmSidebarLeft: SidebarLeft
  }
}
</script>
