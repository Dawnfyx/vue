<template>
<!--  <div>{{listData}}</div>-->
  <b-list-group>
    <b-list-group-item
      v-for="(item, key) of listData":key="key"
      @click="handleRouteGo(item, key)">
      {{item.customer}}
      <page></page>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
    export default {
        name: "list",
        props: {
            listData: Array,
            searchValue: String
        },
        methods: {
            handleRouteGo(item, key){
              this.$router.push("/customer/detail/" + item.id);
            }
        }
    }
</script>

<style scoped>

</style>
