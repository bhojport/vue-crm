<template>
  <div>
    <highmap :options="options" :constructor-type="'mapChart'"></highmap>
  </div>
</template>
<script>
import Highcharts from 'highcharts'
import { Chart } from 'highcharts-vue'
import mapInit from 'highcharts/modules/map'

mapInit(Highcharts)

export default {
  components: {
    highmap: Chart
  },
  props: ['options']
}
</script>