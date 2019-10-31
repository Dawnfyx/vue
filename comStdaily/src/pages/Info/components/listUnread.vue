<template>
  <b-list-group>
    <b-list-group-item
      v-for="(item, key) in listDataUnread" :key="key"
      v-if="!item.readLabel"
      @click="handleHaveRead(item, key)">
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
        name: "listUnread",
        computed:{
            listDataUnread:{
                get(){
                    if(JSON.parse(localStorage.vuex).stateInfoList){
                        return JSON.parse(localStorage.vuex).stateInfoList.list
                    } else{
                        return this.$store.state.stateInfoList.list;
                    }
                }
            }
        },
        methods:{
            handleHaveRead(item, key){
                this.listDataUnread[key].readLabel = true;
                this.$store.state.stateInfoList.list = this.listDataUnread;
                JSON.parse(localStorage.vuex).stateInfoList = JSON.stringify(this.listDataUnread);
                this.$router.push("/info/detail/" + item.id);
            }
        },
        watch:{
            listDataUnread(){
                // debugger
            }
        }
    }
</script>

<style scoped>

</style>
