import Vue from 'vue'
import VCharts from 'v-charts'
<template>
  <ve-line :data="chartData"></ve-line>
</template>


<script>
export default {
  name: 'home',
  data () {
    return {
          chartData: {
          columns: ['shijian', 'vcpu','neicun_GB'],
          rows: []
        },
    } 
  },
  mounted: function() {
      this.showAliyuns()
  },
  methods: {
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

           for(var i=0; i < v.length; i++)
           { 
         /*   var s6 = [
            { vcpu: "2", anliang_hour: "0.66", biaozhunmuluyuejia: "191.0" },
            { vcpu: "4", anliang_hour: "1.33", biaozhunmuluyuejia: "383.0" },
            { vcpu: "8", anliang_hour: "2.66", biaozhunmuluyuejia: "765.0" }
          ]
           this.chartData.rows = s6  */
            
         
            /*var s6 = [
            { vcpu: v[0].fields.vcpu, anliang_hour: v[0].fields.anliang_hour, biaozhunmuluyuejia: v[0].fields.biaozhunmuluyuejia },
            { vcpu: v[1].fields.vcpu, anliang_hour: v[1].fields.anliang_hour, biaozhunmuluyuejia: v[1].fields.biaozhunmuluyuejia },
            { vcpu: v[2].fields.vcpu, anliang_hour: v[2].fields.anliang_hour, biaozhunmuluyuejia: v[2].fields.biaozhunmuluyuejia }
          ]
           this.chartData.rows = s6 */
           
           
             var s1 = { shijian: v[i].fields.shijian, vcpu: v[i].fields.vcpu, neicun_GB: v[i].fields.neicun_GB}
                
             this.chartData.rows.push(s1)
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
