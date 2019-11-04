<template>
  <b-modal id="tooltipBox" :title="tooltipData.title">
    <p class="my-4">{{tooltipData.content}}</p>
  </b-modal>
</template>

<script>
    export default {
        name: "tooltip",
        props:{
            tooltipData: Object
        }
    }
</script>

<style lang="less">

  @import '~style/mainColor';

  #tooltipBox{
    width: 80%;
    top: 50%;
    left: 10%;
    margin-top: -50%;

    .modal-header{
      border-bottom: 0px;
    }
    .modal-footer{
      padding: 0px;

      button{
        width: 50%;
        border-radius: 0px;
        border: transparent;
        background-color: transparent;
        color: @cl333;
      }
      & > :not(:last-child) {
        border-right: @borderVal;
        margin-right: 0;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
      }
      & > :not(:first-child) {
        margin-left: 0;
      }
    }
  }
  .modal-backdrop{
    opacity: 0.5;
  }
</style>
