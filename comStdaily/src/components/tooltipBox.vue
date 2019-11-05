<template>
  <b-modal
    id="tooltipBox"
    hide-footer
    :title="tooltipData.title">
    <p class="my-4">{{tooltipData.content}}</p>
    <b-button class="mt-3" variant="outline-danger" block>Close</b-button>
    <b-button class="mt-2" variant="outline-warning" block>Toggle</b-button>
  </b-modal>
</template>

<script>
    export default {
        name: "tooltip",
        props:{
            tooltipData: Object
        },
        components:{
        },
        methods:{
            toggleSidebar(){
                this.$emit("toggle")
            }
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
