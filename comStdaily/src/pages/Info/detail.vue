<template>
    <div>
      <header-title
        :title="title.title"
        :headerLeft="title.headerLeft"></header-title>
      <b-card>I'm the card in tab</b-card>
    </div>
</template>

<script>
    import headerTitle from "@/components/headerTitle";
    export default {
        name: "detail",
        data() {
            return {
                title: {
                    title: "消息详情",
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
  .card{
    margin: 2rem;
  }
</style>
