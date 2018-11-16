<template>
  <div id="crm-user-details">
    <div class="row no-gutter mb-3">
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Bought this year</h2>
            <horizontal-bar-chart :data="userPurchasesData" :options="userPurchasesOptions"></horizontal-bar-chart>
          </div>
        </div>
      </div>
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Store purchases</h2>
            <pie-chart :data="storePurchasesData" :options="storePurchasesOptions"></pie-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row no-gutter">
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Cost incurred this year</h2>
            <bar-chart :data="userExpensesData" :options="userExpensesOptions" v-if="dataMounted"></bar-chart>            
          </div>
        </div>
      </div>
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Currently reading</h2>
            <ul class="list-unstyled">
              <li>To kill a mockingbird</li>
              <li>Harry potter and the sorcerer's stone</li>
              <li>Animal farm</li>
              <li>The giver</li>
            </ul>
            <h2 class="card-title h5">Next up</h2>
            <ul class="list-unstyled">
              <li>All About Love</li>
              <li>Desert Solitaire</li>
              <li>Disgrace</li>
              <li>Geek Love</li>
              <li>Giovanni's Room</li>
              <li>A Good Man Is Hard to Find and Other Stories</li>
              <li>The Handmaid's Tale</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalBarChart from '@/components/charts/horizontalBar'
import PieChart from '@/components/charts/pie'
import BarChart from '@/components/charts/bar'
import {
  storePurchasesData,
  storePurchasesOptions,
  userPurchasesData,
  userPurchasesOptions,
  userExpensesData,
  userExpensesOptions,
} from '@/mockData'

Chart.defaults.global.legend.display = false

export default {
  components: {
    HorizontalBarChart,
    PieChart,
    BarChart
  },
  data: function() {
    return {
      storePurchasesData,
      storePurchasesOptions,
      userPurchasesData,
      userPurchasesOptions,
      userExpensesData,
      userExpensesOptions,
      dataMounted: false
    }
  },
  mounted() {
    // Assigning a random data for each user
    const { id: userId } = this.$route.params
    this.userExpensesData.datasets[0].data = this.userExpensesData.datasets[0].data.map(x => x + userId * 10000).sort(() => .5 - Math.random())
    this.userPurchasesData.datasets[0].data = this.userPurchasesData.datasets[0].data.map(x => x + userId * 10000).sort(() => .5 - Math.random())
    this.storePurchasesData.datasets[0].data = this.storePurchasesData.datasets[0].data.map(x => x + userId * 10000).sort(() => .5 - Math.random())

    this.dataMounted = true
  }
}
</script>
