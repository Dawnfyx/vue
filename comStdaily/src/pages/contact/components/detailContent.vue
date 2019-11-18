<template>
  <div>
    <div v-for="items of detailLayout">
      <div class="title">
        {{items.name}}
      </div>
      <div class="content">
          <div v-for="(item, key) of items.fields">
            <span>{{item.label}}</span>==<span>{{getItemValue(detailData.Attributes, item.id)}}</span>
            <hr>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "detailContent",
        data() {
            return {
            }
        },
        props: {
          detailLayout: Array,
          detailData: Object
        },
        computed:{
        },
        methods: {
          getItemValue(item, id) {
            for (let i = 0; i < item.length; i++) {
              if (item[i].Key == id) {
                return item[i].Value
              }
            }
          }
        },
        beforeMount() {

        },
        Mount() {

        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .title{
    line-height: 20px;
    background: #eee;
    text-indent: 10px;
    padding: 6px;
  }

</style>
