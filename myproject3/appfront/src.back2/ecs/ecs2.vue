<!-- 前端页面设计图：（1）代表产品属性的7个单选框，包括地域、用户、网络、系统、I/O、产品、实例规格，（2）echarts图表 -->
<template>
  <div>
    <!-- 代表产品属性的各个单选框 -->
    <div style="margin-top: 10px">
      <span style="font-weight:bold">地域：</span>
      <el-radio v-model="allRadio.radio1" label="1" border size="medium">不限</el-radio>
      <el-radio v-model="allRadio.radio1" label="2" border size="medium">华北1</el-radio>
      <el-radio v-model="allRadio.radio1" label="3" border size="medium">华北2</el-radio>
      <el-radio v-model="allRadio.radio1" label="4" border size="medium">华北3</el-radio>
      <el-radio v-model="allRadio.radio1" label="5" border size="medium">华北5</el-radio>
      <el-radio v-model="allRadio.radio1" label="6" border size="medium">华东1</el-radio>
      <el-radio v-model="allRadio.radio1" label="7" border size="medium">华东2</el-radio>
      <el-radio v-model="allRadio.radio1" label="8" border size="medium">华南1</el-radio>
      <el-radio v-model="allRadio.radio1" label="9" border size="medium">西南1</el-radio>
      <el-radio v-model="allRadio.radio1" label="10" border size="medium">香港</el-radio>  
    </div>
    <div style="margin-top: 10px">
      <span style="font-weight:bold">用户：</span>
      <el-radio v-model="allRadio.radio2" label="1" border size="medium">企业级</el-radio>
      <el-radio v-model="allRadio.radio2" label="2" border size="medium">入门级</el-radio>
    </div>
    <div style="margin-top: 10px">
      <span style="font-weight:bold">网络：</span>
      <el-radio v-model="allRadio.radio3" label="1" border size="medium">专有网络</el-radio>
      <el-radio v-model="allRadio.radio3" label="2" border size="medium">经典网络</el-radio>
    </div>
    <div style="margin-top: 10px">
    <span style="font-weight:bold">系统：</span>
      <el-radio v-model="allRadio.radio4" label="1" border size="medium">非Windows</el-radio>
      <el-radio v-model="allRadio.radio4" label="2" border size="medium">Windows</el-radio>
    </div>
    <div style="margin-top: 10px">
    <span style="font-weight:bold">I/O：</span>&nbsp;&nbsp;
      <el-radio v-model="allRadio.radio5" label="1" border size="medium">优化</el-radio>
      <el-radio v-model="allRadio.radio5" label="2" border size="medium">不优化</el-radio>
    </div>
    <div style="margin-top: 10px">
    <span style="font-weight:bold">产品：</span>
      <el-radio v-model="allRadio.radio6" label="1" border size="medium">优化</el-radio>
      <el-radio v-model="allRadio.radio6" label="2" border size="medium">不优化</el-radio>
    </div>
    <div style="margin-top: 10px">
    <span style="font-weight:bold">实例规格：</span>
    <!-- 实现label项改变，对应的产品数据就相应改变？ -->
      <el-radio v-model="allRadio.radio7" label="1" border size="medium">vCPU=2,内存(GB)=8</el-radio>
      <el-radio v-model="allRadio.radio7" label="2" border size="medium">vCPU=4,内存(GB)=16</el-radio>
      <el-radio v-model="allRadio.radio7" label="3" border size="medium">vCPU=8,内存(GB)=32</el-radio>
      <el-radio v-model="allRadio.radio7" label="4" border size="medium">vCPU=16,内存(GB)=64</el-radio>
      <el-radio v-model="allRadio.radio7" label="5" border size="medium">vCPU=24,内存(GB)=96</el-radio>
      <el-radio v-model="allRadio.radio7" label="6" border size="medium">vCPU=32,内存(GB)=128</el-radio>
      &nbsp;&nbsp;<el-radio v-model="allRadio.radio7" label="7" border size="medium">vCPU=64,内存(GB)=256</el-radio>
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
        // 代表产品属性的单选框，radio1代表一个属性，默认是选择第一个单选项
        allRadio: {
          radio1: '1',
          radio2: '1',
          radio3: '1',
          radio4: '1',
          radio5: '1',
          radio6: '1',
          radio7: '1',
        },
        msg: 'Welcome to Your Vue.js App'
      }
    },
    watch: {
      allRadio: {
        handler: function(newVal, old) {
          console.log(newVal.radio1);
        },
        deep: true
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
            data:[230, 232, 301, 254, 290, 230, 210]
        },
        {
            name:'优惠月价',
            type:'line',
            data:[218, 182, 191, 230, 260, 210, 200]
        },
        {
            name:'年付月价',
            type:'line',
            data:[150, 132, 121, 154, 190, 200, 180]
        },
        {
            name:'3年付月价',
            type:'line',
            data:[120, 112, 100, 134, 160, 130, 120]
        },
        {
            name:'5年付月价',
            type:'line',
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