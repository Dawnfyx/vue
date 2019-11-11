<template>
<!--  <div>{{listData}}</div>-->
  <b-list-group>
    <b-list-group-item
      v-for="(item, key) of listData"
      :key="key" :to="item.id">
      {{item.customer}}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
    export default {
        name: "list",
        props: {
            listData: Array
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
