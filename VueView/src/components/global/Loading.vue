<template>
  <div>
    <div v-if="loadBox" class="loading">
      <p v-if="!loadError"><i class="fa fa-loading"></i> Loading...</p>
      <p v-else>加载失败，请重试<a @click="refreshData()"><i class="fa fa-refresh"></i></a></p>
      <slot v-if="data != ''" name="data"></slot>
      <div v-else class="no-data">暂无数据！</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Loading",
        props:{
          loadBox: {
            type: Boolean,
            default: true,
            required: true //必须的
          },
          loadError: {
            type: Boolean,
            default: false,
            required: true
          },
          data: {
            type: Array,
            default: ()=> [],
            required: true
          }
        },
        methods: {
          refreshData() {
            this.$emit("refresh");
          }
        }
    }
</script>

<style scoped>

  .loading{
      border: 1px solid red;
      min-width: 300px;
      min-height: 100px;
      background-color: #ffffff;
      margin: 0px 20px;
      padding: 10px;
  }
  .loading p{
      text-align: center;
      box-sizing: border-box;
      margin-top: 10px;
      margin-bottom: 0px;
      padding: 10px 0px;
  }
  .loading p a{
      margin-left: 10px;
  }
  .loading ul{
      list-style-type: none;
      padding-left: 0px;
  }


</style>
