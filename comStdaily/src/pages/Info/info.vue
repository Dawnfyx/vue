<template>
  <div>
    <header-title
      :title="title.title"
      :headerLeft="title.headerLeft"
      :headerRight="title.headerRight"></header-title>
    <div class="decorateLine">
      <hr>
    </div>
    <child-tabs></child-tabs>
  </div>
</template>

<script>

    import headerTitle from "../../components/headerTitle";
    import childTabs from "./components/tabs"

    export default {
        name: "info",
        data() {
            return {
                title: {
                    title: "消息",
                    headerLeft: true,
                    headerRight: true
                }
            }
        },
        components: {
            headerTitle: headerTitle,
            childTabs: childTabs
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  .decorateLine {
    background-color: @mColor;
    overflow: hidden;

    hr {
      background-color: @clfff;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 8rem;
    }
  }


</style>
