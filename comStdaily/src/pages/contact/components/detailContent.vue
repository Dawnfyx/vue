<template>
  <div class="">

  </div>
</template>

<script>

    export default {
        name: "detailContent",
        data() {
            return {
                detailData: ""
            }
        },
        props: {
            contact: Object
        },
        computed:{
            phoneData: {
                get(){
                    return this.contact.phone;
                }
            },
            telephoneData: {
                get(){
                    return this.contact.telephone;
                }
            },
            emailData: {
                get(){
                    return this.contact.email;
                }
            }
        },
        methods: {},
        beforeMount() {

        },
        Mount() {

        }
    }
</script>

<style lang="less">

  @import '~style/mainColor';

  .form-group {
    width: 100%;
    overflow: hidden;
    margin-bottom: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    & + .form-group{
      border-top: @borderVal;
    }

    label {
      width: 6rem;
      margin-bottom: 0;
      padding-right: 0.5rem;
      text-align: right;
      float: left;
    }

    & > div {
      width: calc(~"100% - 6rem");
      float: left;
    }
    .item{
      width: 100%;
      padding: 0.5rem 0;

      & > div {
        width: calc(~"100% - 6rem");
        float: left;
      }
      &:first-child{
        margin-top: -0.5rem;
      }
      &:last-child{
        margin-bottom: -0.5rem;
      }
    }
  }

</style>
