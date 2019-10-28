<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Cras justo odio
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>

      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>

      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Morbi leo risus
        <b-badge variant="primary" pill>1</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Morbi leo risus
        <b-badge variant="primary" pill>11</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Quis magna Lorem anim amet
        <b-badge variant="primary" pill>1</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Vestibulum at eros
        <b-badge variant="primary" pill>3</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <b-badge variant="primary" pill>4</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Cras justo odio
        <b-badge variant="primary" pill>5</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>

    import headerTitle from "../../components/headerTitle";
    export default {
        name: "info",
        data(){
            return{
                title: {
                    title: "消息",
                    headerLeft: true
                }
            }
        },
        components:{
            headerTitle: headerTitle
        }
    }
</script>

<style scoped>

</style>
