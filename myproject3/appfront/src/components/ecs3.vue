<!-- 实现一个属性单选项 -->
<template>
  <div>
    <div style="margin-top: 10px">
      <span style="font-weight:bold">实例规格：</span>
      <el-radio v-model="radio7" label="1" border size="medium">vCPU=2,内存(GB)=8</el-radio>
      <el-radio v-model="radio7" label="2" border size="medium">vCPU=4,内存(GB)=16</el-radio>
      <el-radio v-model="radio7" label="3" border size="medium">vCPU=8,内存(GB)=32</el-radio>
      <el-radio v-model="radio7" label="4" border size="medium">vCPU=16,内存(GB)=64</el-radio>
      <el-radio v-model="radio7" label="5" border size="medium">vCPU=24,内存(GB)=96</el-radio>
      <el-radio v-model="radio7" label="6" border size="medium">vCPU=32,内存(GB)=128</el-radio>
      &nbsp;&nbsp;
      <el-radio v-model="radio7" label="7" border size="medium">vCPU=64,内存(GB)=256</el-radio>
    </div>
    <div class="hello">
    <div id="choice"></div>
    <div id="myChart"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        radio7: '1',
        msg: 'Welcome to Your Vue.js App',
        // 增加mychart:null        
        myChart: null
      }
    },
    // 增加watch以下
    watch: {
      radio7: function (newVal, old) {
        // body...
        console.log(newVal)
        const obj = {grid:{
      top:'25%',
      left:'25%'
    },
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
        data: ['1月','2月','3月','4月','5月','6月','7月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'标准目录月价',
            type:'line',
            data:[2300, 2320, 3001, 2504, 2900, 2300, 2100]
        },
        {
            name:'优惠月价',
            type:'line',
            data:[218, 182, 191, 2030, 2600, 2100, 2000]
        },
    ]}
        this.myChart.setOption(obj, true);
      }
    },
    // 增加以上
    mounted()
    {
      this.drawLine();
    },
    methods: {
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById(
            'myChart'))
          this.myChart = myChart;
          // this.绘制图表
          this.myChart.setOption({
    grid:{
      top:'25%',
      left:'25%'
    },
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
        data: ['1月','2月','3月','4月','5月','6月','7月']
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
  height:10px;  
}
#myChart{
  width:800px;
  height:500px;
  margin:0 auto
}
</style>