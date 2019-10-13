<template>
<div>
  <b-list-group class="list">
    <b-list-group-item href="./#/detail" class="flex-column align-items-start"
      v-for="(item, key) of listData.audit" :key="key"
      :class=""
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{item.name}}</h5>
        <small>{{item.time}}</small>
      </div>
      <p class="mb-1 info">
        {{item.cparagraph}}
      </p>
      <small>Id:{{item.id}}</small>
    </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "list",
        data(){
          return{
            listData: ""
          }
        },
        methods:{
            getAuditDataInfo() {
                axios.get('/api/auditData.json').then(this.getAuditDataInfoSucc)
            },
            getAuditDataInfoSucc(res) {
                const data = res.data;
                if (data.data) {
                  this.listData = data.data;
                }
            }
        },
        mounted(){
           this.getAuditDataInfo()
        }
    }
</script>

<style scoped>
  .list .info{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
</style>
