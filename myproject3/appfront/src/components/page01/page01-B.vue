<template>
  <div>
    <h2 class="text-center">{{title}}</h2>
    <ul class="text-center spacing" style="padding: 0">
      <li v-for="(item,index) in links"><a @click="showAliyuns2(item.text)">{{item.text}}</a></li>
    </ul>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>





<script>
export default {
  name: 'page01',
  data () {
    return {
          title: '欢迎访问',
          links: [],
          checkindex: 0,
          isRouterAlive: true,
          chartData: {          
          columns: ['shijian', 'biaozhunmuluyuejia', 'youhuiyuejia', 'nianfuyuejia', 'sannianfuyuejia', 'wunianfuyuejia'],          
          rows: []    }
    } 
  },


/*
watch:{

 "$route":"getPath"  // 监听事件

}, */  




  mounted: function() {
      this.showAliyuns2(paramter)
      this.showAliyuns()
  },
  methods: {
/*     reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   }, 

     toggle (index) {
        this.checkindex = index
      }, */

     /* getPath(){
//this.$router.go(0)
this.reload()

//  document.write('<template><div><h2 class="text-center">{{title}}</h2><ul class="text-center spacing" style="padding: 0"><li v-for="(item,index) in links"><a @click="$goRoute(item.route,item.text)">{{item.text}}</a></li></ul><router-view v-if="isRouterAlive"></router-view></div></template>')

let path = this.$route.query.pk_refinfo    //或得当前路径
console.log("route parents....")
console.log(path)
console.log("route parents2....")
    },  */

      
    showAliyuns2(paramter){      
   this.$http.get('http://10.1.100.189:8000/api/show_aliyuns')        
  .then((response) => {                        
   var res = JSON.parse(response.bodyText)            
   console.log(res)                        
   if (res.error_num == 0) {              	                    
   var v = res['list']              
   var p=paramter               
   this.chartData.rows = []
   console.log("ccc1100")              
   console.log(p)              
   console.log("ccc0011")            
 
   for(var i=0; i < v.length; i++)           {                      
    if (v[i].fields.shiliguige == p)          {              
    var s1 = { shijian: v[i].fields.shijian,biaozhunmuluyuejia:v[i].fields.biaozhunmuluyuejia, youhuiyuejia:v[i].fields.youhuiyuejia, nianfuyuejia:v[i].fields.nianfuyuejia, sannianfuyuejia:v[i].fields.sannianfuyuejia, wunianfuyuejia: v[i].fields.wunianfuyuejia}                             
      this.chartData.rows.push(s1)          
         }           
          }              
   
      console.log('ddddd')             
       console.log(this.chartData.rows)             
         console.log(this.chartData.rows[0])             
         console.log(this.chartData.rows[1])             
          console.log(this.chartData.rows[2])                          
          console.log('fffffff')            } 
         else {              this.$message.error('查询书籍失败')              
                 console.log(res['msg'])            }        })    
        },



    showAliyuns(){
      this.$http.get('http://10.1.100.189:8000/api/show_aliyuns')
        .then((response) => {
            
            var res = JSON.parse(response.bodyText)
            console.log(res)
            
            if (res.error_num == 0) {
              
              var p=this.$route.query.pk_refinfo 
              var v = res['list']

           for(var i=0; i < v.length; i++)
           {  
            

            if (v[i].fields.shiliguige.startsWith(p)) // || v[i].fields.shiliguige.startWith("内存增强型")>-1 || v[i].fields.shiliguige.startWith("内存网络增强型")>-1)
            {
              console.log(p + " aaa")
             
            
            for (var j=0; j < this.links.length; j++)
            {
            
                 console.log("links.....")
                 console.log(this.links[j].text)
                 //console.log(links[j].fields.text)
                 console.log("links2.......")

                 if (this.links[j].text == v[i].fields.shiliguige)
		 {
                    break
                 }
            }


            
            if (j != this.links.length && this.links[j].text == v[i].fields.shiliguige)
	    {
              continue
            }
            else
            {
                  //alert("contain2:")
                  var s1 = { text: v[i].fields.shiliguige, route: '/page01/page01-b/end'}

                  console.log('cmcmcmcmccmm')
                  console.log(s1)
                  console.log('mcmcmcmcmcmc')
                  this.links.push(s1)
            }
             }

             }
            
            
             console.log('ddddd')
             console.log(this.links)
             console.log(this.links[0])
             console.log(this.links[1])
             console.log(this.links[2])
             
             console.log('fffffff')

            } 
            else {
              this.$message.error('查询书籍失败')
              console.log(res['msg'])
            }
        })
    }
  }
}
</script>

<style>
  .active {
    background: #138bec;
  }
</style>
