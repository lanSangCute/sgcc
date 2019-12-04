import { Bar } from 'vue-chartjs'
import request from './request';

export default {
  extends: Bar,
  data(){
    return {
      data:request.dataBase
    }
  },
  mounted () {
    let label= [], dataset = [];
    this.data.map(item=>{
        label.push(item.date);
        dataset.push(item.value)
    })
    this.renderChart({
      labels: label,
      datasets: [
        {
          label: '数据表趋势',
          backgroundColor: '#086B67',
          data: dataset
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}