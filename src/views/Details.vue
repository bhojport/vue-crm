<template>
  <div id="crm-details">
    <div class="row no-gutter mb-3">
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Total sales by year</h2>
            <horizontal-bar-chart :data="totalSalesData" :options="totalSalesOptions"></horizontal-bar-chart>
          </div>
        </div>
      </div>
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Total store sales by year</h2>
            <pie-chart :data="totalStoreSalesData" :options="totalStoreSalesData"></pie-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row no-gutter">
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Total income by year</h2>
            <bar-chart :data="totalIncomeData" :options="totalIncomeOptions"></bar-chart>            
          </div>
        </div>
      </div>
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">Users wishlist</h2>
                    
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
  totalSalesData,
  totalSalesOptions,
  totalStoreSalesData,
  totalStoreSalesOptions,
  totalIncomeData,
  totalIncomeOptions
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
      totalSalesData,
      totalSalesOptions,
      totalStoreSalesData,
      totalStoreSalesOptions,
      totalIncomeData,
      totalIncomeOptions
    }
  }
}
</script>
