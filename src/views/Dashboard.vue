<template>
  <div id="crm-dashboard">
    <div class="row no-gutter mb-3">
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Active Users</h5>
            <line-chart :data="lineChartData" :options="lineChartOptions"></line-chart>
          </div>
        </div>
      </div>
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Users by location</h5>
            <high-chart-map :options="usersByLocationMapOptions"></high-chart-map>
          </div>
        </div>
      </div>
    </div>
    <div class="row no-gutter">
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Users by Age</h5>
            <horizontal-bar-chart :data="usersByAgeBarChartData" :options="usersByAgeBarChartOptions"></horizontal-bar-chart>            
          </div>
        </div>
      </div>
      <div class="col-sm-6 card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Registered users</h5>
            <horizontal-bar-chart :data="horizontalBarChartData" :options="horizontalBarChartOptions"></horizontal-bar-chart>        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/charts/line'
import HorizontalBarChart from '@/components/charts/horizontalBar'
import HighChartMap from '@/components/charts/Highmap.vue'
import { 
  lineChartData,
  lineChartOptions,
  horizontalBarChartData,
  horizontalBarChartOptions,
  usersByAgeBarChartData,
  usersByAgeBarChartOptions,
  usersByLocationMapOptions
} from '@/mockData'

Chart.defaults.global.legend.display = false

export default {
  components: {
    LineChart,
    HorizontalBarChart,
    HighChartMap
  },
  data: function() {
    return {
      lineChartData,
      lineChartOptions,
      horizontalBarChartData,
      horizontalBarChartOptions,
      usersByAgeBarChartData,
      usersByAgeBarChartOptions,
      usersByLocationMapOptions
    }
  }
}
</script>
