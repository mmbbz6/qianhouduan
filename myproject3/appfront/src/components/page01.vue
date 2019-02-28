<template>    
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>


 
<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>




/*

<script>
  export default {
    name: 'app',
    data () {
      return {
        links: [
          {
            text: '内存型',
            route: '/page01/page01-b'
          },
          {
            text: '内存增强型',
            route: '/page01/page01-b'
          },
          {
            text: '内存网络增强型',
            route: '/page01/page01-b'
          }
        ]
      }
    },

    /* watch:{ 

 "$route":"getPath"  // 监听事件

},  */ 

/*   mounted () {
      this.isSelect = this.$route.name
    },  */

   methods: {
  setDate()
 {
    this.activeDate = (new Date()).toString()
 },

  /* selectNav (text) {
        this.isSelect = this.$route.name
        switch (text) {
          case '内存型': this.$router.push('/page01/page01-b')
            break
          case '内存增强型': this.$router.push('/page01/page01-c')
            break
          case '内存网络增强型': this.$router.push('/page01/page01-d')
            break
      }
    },  */

 getPath(){
//this.$router.go(0)
let path = this.$route.query.pk_refinfo    //或得当前路径
console.log("route parents....")
console.log(path)
console.log("route parents2....")
    }
        }
  }
</script>
*/
/*
<style>
  .active{
      color: #138bec;
    }
  .text-center {
    text-align: center;
  }
  .spacing {
    margin-top: 30px;
  }
  .red {
    color: darkred;
  }
  ul li {
    display: inline-block;
    margin-right: 10px;
  }
  ul li a{
    display: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  ul li a:hover{
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
    border: 1px solid #138bec;
  }
</style>
*/
