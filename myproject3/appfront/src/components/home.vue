<template>
<div class="custom-tree-node"> 
  <div class="block">
    <p>欢迎访问</p>
    <el-tree
      :data="data7"
      show-checkbox
      :default-expand-all="false"
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
          <button type="button"  v-if="data.id ===15" @click="setDate();$goRoute(data.route,data.label)">点击查看价格变化曲线
        </button>
      </span>
    </el-tree>
   <router-view  :key="activeDate"></router-view>
  </div>
</div>
</template>
<script>
  let id = 1000;

  export default {
    data() {
      return {
        activeDate: '', 
        data7: [],
        chartData: {
          columns: ['shijian', 'biaozhunmuluyuejia', 'youhuiyuejia', 'nianfuyuejia', 'sannianfuyuejia', 'wunianfuyuejia'],
          rows: []    }
      }
    },

     /* watch:{

   "$route":"getPath"  // 监听事件

   }, */ 
 

     mounted: function() {
      this.showAliyuns2()
      this.showAliyuns()
     }, 

    methods: {
shwoData(node, data) {
  console.log(node);
  console.log(data);
},
    reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   },

    getPath(){
//this.$router.go(0)
this.reload()


  let path = this.$route.query.pk_refinfo    //或得当前路径
console.log("route parents....")
console.log(path)
console.log("route parents2....")
    },
 
 
    setDate()
    {
       this.activeDate = (new Date()).toString()
    console.log('************&&&&&&&&&&&&&&&&&&&&')
     //console.log(node)
     //console.log(data)
    },

    setShow(p)
    {this.tt=p},

    showAliyuns2(paramter){
   this.$http.get('http://10.1.100.189:8000/api/show_aliyuns')
   .then((response) => {
   var res = JSON.parse(response.bodyText)
   //console.log(res)
   if (res.error_num == 0) {
   var v = res['list']
   var p=paramter
   this.chartData.rows = []
   //console.log("ccc1100")
   //console.log(p)
   //console.log("ccc0011")

   for(var i=0; i < v.length; i++)           {
    if (v[i].fields.shiliguige == p)          {
    var s1 = { shijian: v[i].fields.shijian,biaozhunmuluyuejia:v[i].fields.biaozhunmuluyuejia, youhuiyuejia:v[i].fields.youhuiyuejia, nianfuyuejia:v[i].fields.nianfuyuejia, sannianfuyuejia:v[i].fields.sannianfuyuejia, wunianfuyuejia: v[i].fields.wunianfuyuejia}
      this.chartData.rows.push(s1)
         }
          }

     // console.log('ddddd')
       //console.log(this.chartData.rows)
         //console.log(this.chartData.rows[0])
         //console.log(this.chartData.rows[1])
          //console.log(this.chartData.rows[2])
          //console.log('fffffff')          
                     }
         else {              this.$message.error('查询书籍失败')
            //     console.log(res['msg'])
                                 }        })
        },



       showAliyuns(){
      var data77 = [
      {
        label: '内存型',
        children: [     {
                  label: '内存型',
                  children: []   },
          {
                  label: '内存增强型',
                  children: []         
          },   {
                  label: '内存网络增强型',
                  children: [] 
                }]
      }, {
        label: '计算型',
        children: [{
          label: '计算型',
          children: []
        }, {
          label: '密集计算型',
          children: []
        },{
          
          label: 'GPU计算型',
          children: []
        },{
              label: 'GPU可视化计算型',
              children: []
        },{
              label: 'FPGA计算型',
              children: []
          } ]
      }, {
         label: '高主频型',
         children: [{
           label: '高主频计算型',
           children: []
           }, {
            label:'高主频通用型',
            children: []
             }
           ]
      },{
         label: '通用型',
          children: [{
           label: '通用型',
           children: []
           }, {
            label:'通用网络增强型',
            children: []
             }
           ]
      },{
          label: '内存型',
          children: [{
           label: '内存型',
           children: []
           }, {
            label:'内存增强型',
            children: []
             },{
              label: '内存网络增强型',
              children: []
             }
           ]
      },{
          label: '大数据型',
          children: [{
             label: '大数据型',
              children: []
            },{
              label: '大数据网络增强型',
              children: []
               }]
     },{
        label: '本地型',
        children: [{
          label: '本地SSD型',
          children: []
                 }]
      }
      ];
        console.log("cccccccccccccccccccccccc showAliyuns")
       this.$http.get('http://10.1.100.189:8000/api/show_aliyuns')
        .then((response) => {

            var res = JSON.parse(response.bodyText)
            console.log(res)

            if (res.error_num == 0) {
            var v = res['list']
           
          for (var c=0; c < data77.length; c++)
          {
             for (var m=0; m < data77[c].children.length; m++)
            {

              var p=data77[c].children[m].label   //this.$route.query.pk_refinfo
              //var v = res['list']
              //this.links = this.data   
         //console.log("KKKKKKKKKKKKKKKK" + v.length + "  " + p)  
           
          for(var i=0; i < v.length; i++)
           {
            // console.log("mmmmmm0000000")
            //console.log(data77[0].children[0].id)
             //console.log("mmmmmmmmmmmmm")
            if (v[i].fields.shiliguige.startsWith(p)) // || v[i].fields.shiliguige.startWith("内存增强型")>-1 || v[i].fields.shiliguige.startWith("内存网络增强型")>-1)
            {
              //console.log("pppp")


            for (var j=0; j < data77[c].children[m].children.length; j++)
            {

                // console.log("links.....")
                 //console.log(data77[0].children[0].children[j].label)
                 //console.log("links2.......")

                 if (data77[c].children[m].children[j].label == v[i].fields.shiliguige)
                 { 
                    break
                 }
            }



            if (j != data77[c].children[m].children.length && data77[c].children[m].children[j].label == v[i].fields.shiliguige)
            {
              continue
            }
            else
            {
                  //alert("contain2:")
                  var s1 = {id:15, label: v[i].fields.shiliguige, route: '/home/end'}

                  console.log('cmcmcmcmccmm')
                  console.log(s1)
                  console.log('mcmcmcmcmcmc')
                 // this.links.push(s1)
                  data77[c].children[m].children.push(s1)
                 console.log('********CCCCCCCCCCCCC')
                 console.log(data77[0].children[0].children)
                 console.log('CCCCCCCCCCCCC*************')
                  
            }
             }   //if

             }  //for

            console.log('ddddd')
            this.data7 = data77
             console.log(this.data7[0].children[0].children)
             console.log(this.data7[0].children[0].children[0])
             console.log(this.data7[0].children[0].children[1])
             console.log(this.data7[0].children[0].children[2])

             console.log('fffffff')
             }  //for
            }   //for

            }  //if
            else {
              this.$message.error('查询书籍失败')
              console.log(res['msg'])
            }
        })   // .then({
    
  },  

    
    setDate()
      {
    this.activeDate = (new Date()).toString()
      }
    }
  }
</script>


<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    background: #fafafa;
  }
  .el-tree {
    float:left;
  }
  .ve-line {
    float:left;
    margin-left:100px;
    width: 1000px !important;
  } 
</style>
