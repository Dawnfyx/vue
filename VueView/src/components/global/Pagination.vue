<template>
  <div class="pagination">
    <span class="total"> 共{{totalCount}}条记录</span>
    <ul class="paging">
      <li class="prev">
        <i class="iconfont icon-chevron-left"></i>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>

    export default {
      name: "Pagination",
      data (){
        return {
          goPage: '',
        }
      }
    }
</script>

<style scoped>

</style>
