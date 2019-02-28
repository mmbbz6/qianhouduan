<template>
  <div>
    <h2 class="text-center">{{title}}</h2>
    <ul class="text-center spacing" style="padding: 0">
      <li v-for="item in links"><a @click="$goRoute(item.route,item.text)">{{item.text}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>





<script>
export default {
  name: 'page04',
  data () {
    return {
          title: '欢迎访问',
          links: []
    } 
  },


watch:{

 "$route":"getPath"  // 监听事件

},




  mounted: function() {
      this.showAliyuns()
  },
  methods: {

     getPath(){
this.$router.go(0)
let path = this.$route.query.pk_refinfo    //或得当前路径
console.log("route parents....")
console.log(path)
console.log("route parents2....")
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
            

            if (v[i].fields.shiliguige.indexOf("通用型")>-1)
            {
              // alert("contain:")
             
            
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
                  var s1 = { text: v[i].fields.shiliguige, route: '/page04/page04-b'}

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
