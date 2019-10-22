<template>
  <div>
    <b-list-group class="list">
      <b-list-group-item
        class="flex-column align-items-start"
        :href="'./#/ExamineDetail/'+item.id"
        v-for="(item, key) of this.listData.data" :key="key"
        v-if="listData.data[key].read"
      >
        <h5 class="mb-1">姓名：{{viewDataValue('new_name', item.attributes)}}</h5>
        <small>时间：{{viewDataValue('new_testtime', item.attributes)}}</small>
        <small>Id: <span ref="itemId">{{item.id}}</span></small>
      </b-list-group-item>
    </b-list-group>
    {{this.listData}}
  </div>
</template>

<script>

    import {mapState, mapMutations, mapActions} from "vuex";

    export default {
        name: "listRead",
        props:{
            listData: Object
        },
        computed:{
            // 映射 this.EntityList 为 store.state.EntityList
            // 映射 this.LayoutForm 为 store.state.LayoutForm
            ...mapState([
                'EntityList',
                'LayoutForm'
            ]),
            listData(){
                return this.EntityList
            }
        },
        methods:{
            viewDataValue(name, dataArray){
                let text = "";
                for(let i=0; i<=dataArray.length; i++){
                    if(dataArray[i].name == name ){
                        let text = dataArray[i].value;
                        return text;
                    }
                }
                return  text;
            },
        },
        watch: {
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';


  .list-group{
    a{
      border: none;

      & + a{
        border-top: 1px solid @cleee;
      }
    }
  }
  .list .info{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .list .list-group-item small{
    width: 100%;
    float: left;
  }
  .list .mb-1{
    font-size: 16px;
  }
</style>
