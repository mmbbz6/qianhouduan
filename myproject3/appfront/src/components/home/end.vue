import Vue from 'vue'
import VCharts from 'v-charts'


import VeLine from 'v-charts/lib/line'
import 'v-charts/lib/style.css' 

<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/echarts/dist/echarts.min.js"></script>
<script src="//unpkg.com/v-charts/lib/index.min.js"></script>

<script>
export default {
  name: 'end',
  data () {
    this.chartSettings = {
        xAxisType: 'value'
      }
    return {
          yAxisName: ['ddcc','sszz'],
          theme: '',
          title: {
           left: 'left',
           text: '',
           yAxis : [
           {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
          } 
       ],
           textStyle:{
        //文字颜色
        color: '#0000FF',
        //字体风格,‘normal‘,‘italic‘,‘oblique‘
        fontStyle: 'normal',
        //字体粗细 ‘normal‘,‘bold‘,‘bolder‘,‘lighter‘,100 | 200 | 300 | 400...
        fontWeight: 'bold',
        //字体系列
        fontFamily: 'sans-serif',
        //字体大小
　　　　 fontSize: 18} 
       },
          height: '350px',
          chartColors: ['#19d4ae','#5ab1ef','#fa6e86','#ffb980','#0067a6','#c4b4e4','#d87a80','#9cbbff','#d9d0c7','#87a997','#d49ea2','#5b4947','#7ba3a8'],
          width: '80%',
          grid: { left: 20, right: 20},
          scale: { y: true },
          chartData: {
          columns: ['时间', '标准月价', '优惠月价', '年付月价', '三年付月价', '五年付月价'],
          rows: []
        }
    } 
  },
  mounted: function() {
      this.showAliyuns()
  },



/*  watch:{

 "this.$route.query.pk_refinfo":"getPath"  // 监听

}, */ 
/* watch: {
      $route(){
        this.pk_refinfo = this.$route.query.pk_refinfo
      },
      pk_refinfo() {
        this.getPath()
      },
}, */

  methods: {
    reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   },

     getPath(){
// this.$router.go(0)
console.log("exe run !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//this.reload()
let path = this.$route.query.pk_refinfo    //或得当前路径
  console.log("route........")
  console.log(path)
  console.log("route2.....")

    }, 

    addBook(){
      this.$http.get('http://10.1.100.189:8000/api/add_book?book_name=' + this.input)
        .then((response) => {
                console.log(responseapi)
            var res = JSON.parse(response.bodyText)
            if (res.error_num == 0) {
              this.showAliyuns()
            } else {
              this.$message.error('新增书籍失败，请重试')
              console.log(res['msg'])
            }
        })
    },
    showAliyuns(){
      this.$http.get('http://10.1.100.189:8000/api/show_aliyuns')
        .then((response) => {
          
/*
this.chartColors = ['#19d4ae','#5ab1ef','#fa6e86','#ffb980','#0067a6','#c4b4e4','#d87a80','#9cbbff','#d9d0c7','#87a997','#d49ea2','#5b4947','#7ba3a8']
this.grid={ left: 20, right: 20}
this.scale={ y: true }
this.width = '80%'
this.height='350px'
this.chartSettings = {axisSite:{right:['占比']},area:true} */  
    
/*this.theme = {
  categoryAxis: {
    axisLine: { show: true },
    axisTick: { show: false },
    splitLine: { show: false }
  },
  valueAxis: {
    axisLine: { show: true }
  }
}*/
            var res = JSON.parse(response.bodyText)
            console.log(res)
            
            if (res.error_num == 0) {
              
	      
              var v = res['list']
              var p=this.$route.query.pk_refinfo 
              console.log("ccc1100")
              console.log(p)
              console.log("ccc0011") 

           for(var i=0; i < v.length; i++)
           { 
           
          if (v[i].fields.shiliguige == p)
          { 
             var s1 = { 时间: v[i].fields.shijian,标准月价:v[i].fields.biaozhunmuluyuejia, 优惠月价:v[i].fields.youhuiyuejia, 年付月价:v[i].fields.nianfuyuejia, 三年付月价:v[i].fields.sannianfuyuejia, 五年付月价: v[i].fields.wunianfuyuejia}
                
             this.chartData.rows.push(s1)
          }
           } 
            this.title.text=p

          
             console.log('ddddd')
             console.log(this.chartData.rows)
             console.log(this.chartData.rows[0])
             console.log(this.chartData.rows[1])
             console.log(this.chartData.rows[2])
             
             console.log('fffffff')

            } else {
              this.$message.error('查询书籍失败')
              console.log(res['msg'])
            }
        })
    }
  }
}
</script>
