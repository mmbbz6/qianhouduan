import Vue from 'vue'
import VCharts from 'v-charts'
<template>
  <ve-line :data="chartData"></ve-line>
</template>


<script>
export default {
  name: 'end',
  data () {
    return {
          chartData: {
          columns: ['shijian', 'biaozhunmuluyuejia', 'youhuiyuejia', 'nianfuyuejia', 'sannianfuyuejia', 'wunianfuyuejia'],
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
             var s1 = { shijian: v[i].fields.shijian,biaozhunmuluyuejia:v[i].fields.biaozhunmuluyuejia, youhuiyuejia:v[i].fields.youhuiyuejia, nianfuyuejia:v[i].fields.nianfuyuejia, sannianfuyuejia:v[i].fields.sannianfuyuejia, wunianfuyuejia: v[i].fields.wunianfuyuejia}
                
             this.chartData.rows.push(s1)
          }
           } 
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
