<template>
    <div>
        <template v-for="item in data">
            {{item.date}}{{item.value}}
        </template>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import { Bar } from 'vue-chartjs'
import request from '../request';

@Component({
    extends: Bar,
})
export default class extends Vue<Bar>{
    data:Array<object> = request.dataBase;
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    }
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
    // mounted () {
    //     this.renderChart(this.chartdata, this.options)
    // }
}
</script>
<style lang="scss">

</style>