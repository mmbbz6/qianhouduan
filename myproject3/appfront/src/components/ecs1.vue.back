<!-- 仅echarts图表 -->
<template>
  <div class="hello">
    <div id="choice"></div>   
    <div id="myChart"></div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted()
    {
      this.drawLine();
    },
    methods: {
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById(
            'myChart'))
          // 绘制图表
          myChart.setOption({
 // title: {
 //        // text: '通用型（g5）ecs'
 //    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['标准目录月价','优惠月价','年付月价','3年付月价','5年付月价']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'标准目录月价',
            type:'line',
            // stack: '总量',
            data:[230, 232, 301, 254, 290, 230, 210]
        },
        {
            name:'优惠月价',
            type:'line',
            // stack: '总量',
            data:[218, 182, 191, 230, 260, 210, 200]
        },
        {
            name:'年付月价',
            type:'line',
            // stack: '总量',
            data:[150, 132, 121, 154, 190, 200, 180]
        },
        {
            name:'3年付月价',
            type:'line',
            // stack: '总量',
            data:[120, 112, 100, 134, 160, 130, 120]
        },
        {
            name:'5年付月价',
            type:'line',
            // stack: '总量',
            data:[69, 93, 90, 93, 90, 70, 78]
        }
    ]
          });
      }
    }
  }
</script>

<style scoped>
h1{
  color:blue
}
#choice{
  width:800px;
  height:20px;  
}
#myChart{
  width:800px;
  height:500px;
  margin:0 auto
}
</style>
