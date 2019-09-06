<template>
  <ol class="ewp-breadcrumb">
    <li v-for="(item ,index) in list" :key="item.index" :class="index+1 == list.length ? 'active':  ''"><a href="#">{{item}}</a></li>
  </ol>
</template>

<script>
    export default {
        name: "breadcrumb",
        props: {
          list: Array
        }
    }
</script>

<style scoped>
  .ewp-breadcrumb {
    padding: .7em .5em;
    margin-bottom: 2rem;
    list-style: none;
    background-color: transparent;
    border-radius: 2px;
    font-size: 85%;
  }
  .ewp-breadcrumb > li {
    display: inline-block;
  }
  .ewp-breadcrumb > li [class*="am-icon-"]:before {
    color: #999999;
    margin-right: 5px;
  }
  .ewp-breadcrumb > li + li:before {
    content: "/\00a0";
    padding: 0 8px;
    color: #cccccc;
  }
  .ewp-breadcrumb > .am-active {
    color: #999999;
  }
</style>
