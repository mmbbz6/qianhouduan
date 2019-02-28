<template>
  <div>
    <ul>
      <li v-for="item in links"><a @click="$goRoute(item.route, item.text);setDate()"> {{item.text}}</a></li>
    </ul>
    <router-view :key="activeDate"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app2',
    data () {
      return {
        links: [
          {
            text: '计算型',
            route: '/page02/page02-b'
          },
          {
            text: '密集计算型',
            route: '/page02/page02-b'
          },
          {
            text: 'GPU计算型',
            route: '/page02/page02-b'
          },
          {
           text: 'GPU可视化计算型',
            route: '/page02/page02-b'
          },
          {
           text: 'FPGA计算型',
            route: '/page02/page02-b'
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
