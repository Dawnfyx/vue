<template>
  <div class="">
    <b-form-group
      label="公司名称："
      label-for="comName">
      <span id="comName">{{contact.company}}</span>
    </b-form-group>
    <b-form-group
      label="联系人："
      label-for="userName">
      <span id="userName">{{contact.username}}</span>
    </b-form-group>
    <b-form-group
      label="采购："
      label-for="purchase">
      <span id="purchase">{{contact.branch}}</span>
    </b-form-group>
    <b-form-group
      label="采购经理："
      label-for="purchaseman">
      <span id="purchaseman">{{contact.position}}</span>
    </b-form-group>

    <div role="group" class="form-group">
      <div class="item" v-for="(item, key) in phoneData" :key="key">
        <label :for="['phone'+ key]" class="d-block">手机：</label>
        <div><span :id="['phone'+key]">{{item}}</span></div>
      </div>
    </div>
    <div role="group" class="form-group">
      <div class="item" v-for="(item, key) in telephoneData" :key="key">
        <label :for="['telephone'+ key]" class="d-block">座机：</label>
        <div><span :id="['telephone'+key]">{{item}}</span></div>
      </div>
    </div>
    <div role="group" class="form-group">
      <div class="item" v-for="(item, key) in emailData" :key="key">
        <label :for="['email'+ key]" class="d-block">邮箱：</label>
        <div><span :id="['email'+key]">{{item}}</span></div>
      </div>
    </div>
    <!--      <b-button type="submit" variant="primary">Submit</b-button>-->
    <!--      <b-button type="reset" variant="danger">Reset</b-button>-->
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
