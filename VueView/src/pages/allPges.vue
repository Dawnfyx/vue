<template>
  <div>

    <h2>table 表格</h2>
    <!--<ewpTable :list="tableList"></ewpTable>-->
    <!--<ewpTableBox :list="tableList"></ewpTableBox>-->
    <ewpTable>
      <tr slot="thead">
        <td>id</td>
        <td>status</td>
        <td>updated_at</td>
        <td>name</td>
        <td>version</td>
      </tr>
      <tr slot="tbody" v-for="item in tableList" :item="item">
        <td>{{item.id}}</td>
        <td>{{item.status}}</td>
        <td>{{item.updated_at}}</td>
        <td>{{item.operator.name}}</td>
        <td>{{item.version}}</td>
      </tr>
    </ewpTable>

    <br>
    <br>
    <br>
    <h2>Accordion 折叠面板</h2>
    <ewpaccordion :list="accordionList"></ewpaccordion>
    <h2>Gallery 图片画廊</h2>
    <ewpgallery :list="galleryList"></ewpgallery>
    <h2>Breadcrumb 面包屑导航容器</h2>
    <ewpbreadcrumb :list="breadcrumbList"></ewpbreadcrumb>
    <h2>钉一下</h2>


    <h2>from 表单</h2>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>

  import * as DingTalkApi from 'dingtalk-jsapi';

  import ewpaccordion from "@/pages/accordion/accordion"
  import ewpgallery from "@/pages/accordion/gallery"
  import ewpbreadcrumb from "@/pages/accordion/breadcrumb"
  import ewpDing from "@/pages/accordion/ding"
  import ewpTable from "@/pages/accordion/cm-table"
  // import ewpTableBox from "@/pages/accordion/tableBox"

  import axios from 'axios'

  export default {
      name: "allPages",
      data: function(){
         return {
           accordionList: [
             { "url": "../../widgets/accordion", "src": "http://fangyaxi.cn/demo/images/blog/blog-thumb-1.jpg", "text": "Donec id elit non mi porta gravida at eget metus amet int"},
             { "url": "../../widgets/accordion", "src": "http://fangyaxi.cn/demo/images/blog/blog-thumb-2.jpg", "text": "Donec id elit non mi porta gravida at eget metus amet int"},
             { "url": "../../widgets/accordion", "src": "http://fangyaxi.cn/demo/images/blog/blog-thumb-3.jpg", "text": "Donec id elit non mi porta gravida at eget metus amet int"}
           ],
           galleryList:[
             { "url": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "src": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "title": "远方 有一个地方 那里种有我们的梦想", "desc": "2375-09-26"},
             { "url": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "src": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "title": "远方 有一个地方 那里种有我们的梦想", "desc": "2375-09-26"},
             { "url": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "src": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "title": "远方 有一个地方 那里种有我们的梦想", "desc": "2375-09-26"},
             { "url": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "src": "http://cn.bing.com/az/hprichv/LondonTrainStation_GettyRR_139321755_ZH-CN742316019.jpg", "title": "远方 有一个地方 那里种有我们的梦想", "desc": "2375-09-26"}
           ],
           breadcrumbList: ["首页", "分类", "内容"],
           tableList: []

         }
      },
      methods:{
        getTableInfo (){
          axios.get('/api/tableInfo.json', {
            params: {
              id: this.$route.params.id
            }
          }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
          const data = res.data;
          this.tableList = data.data.list;
        }
      },
      components:{
          ewpaccordion: ewpaccordion,
          ewpgallery: ewpgallery,
          ewpbreadcrumb: ewpbreadcrumb,
          ewpDing: ewpDing,
          ewpTable: ewpTable,
      },
      mounted () {
        this.getTableInfo()
      }
  }

</script>

<style scoped>
  h1, h2, h3, h4, h5, h6, b, strong {
    font-weight: bold;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 21px;
  }
  .ewp-gallery li{
    width: 50%;
  }
</style>
