<template>
  <b-list-group>
    <b-list-group-item
      v-for="(item, key) in listDataUnread"
      :key="key">
      <div class="title">
        {{item.title}}
        <span class="time">
          {{item.time}}
        </span>
      </div>
      <div class="content">
        {{item.content}}
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
    export default {
        name: "listAll",
        computed:{
            listDataUnread:{
                get(){
                    return this.$store.state.stateInfoList.list;
                }
            }
        }
    }
</script>

<style scoped>

</style>
