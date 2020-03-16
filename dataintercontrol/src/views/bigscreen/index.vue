<template>
  <div id="demo6">
    <div class="item" v-for="(item ,index) in itemData" :key="index">
      <a :href="item.srchref" target="_blank">
        <img :src="item.srcimg" alt="">
        <span>{{item.srcmsg}}</span>
      </a>
    </div>
  </div>
</template>

<script>

    import srcimg from  "@/assets/img/133901.jpg"

    export default {
        name: "",
        data(){
            return{
                itemData:[
                    {
                      srchref: "https://10.219.100.76/extensions/ting_test/Text_Demo.html",
                      srcimg: srcimg,
                      srcmsg: "大屏数据展示"
                    },
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
  #demo6{
    .item{
      width: 20%;
      height: auto;
      border: 2px solid grey;
      padding: 2px;
      margin: 10px 0px 10px 10px;
      float: left;

      a{
        position: relative;
        float: left;

      img{
        width: 100%;
        height: auto;
      }
      span{
        width: 100%;
        height: 60px;
        line-height: 70px;
        background-image: linear-gradient(to top, #5f5f5f, transparent);
        position: absolute;
        bottom: 0px;
        left: 0px;
        color: #fff;
        padding-left: 10px;
        box-sizing: border-box;
        display: none;

      }


      &:hover span{
         display: block;
       }
      }
    }
  }

</style>
