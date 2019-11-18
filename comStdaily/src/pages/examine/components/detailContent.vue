<template>
  <div>
    <div v-for="items of detailLayout.tabs">
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
    props: {
      detailLayout: Object,
      detailData: Object
    },
    methods: {
      getItemValue(item, id) {
        for (let i = 0; i < item.length; i++) {
          if (item[i].Key == id) {
            return item[i].Value
          }
        }
      },
      onSubmit() {

      },
      onReset() {
        debugger
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

  #detailContent {
    margin-top: -7rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    border: @borderVal;
    border-radius: 0.5rem;
    background-color: @clfff;
    padding: 1rem;
    overflow: hidden;

    .form-group {
      width: 50%;
      float: left;
    }
  }

  .title{
    line-height: 20px;
    background: #eee;
    text-indent: 10px;
    padding: 6px;
  }
</style>
