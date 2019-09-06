<template>
    <div>
      <ul class="ewp-widget-list">
        <li v-for="item of list" :key="item.index">
          <a :href="item.url">
            <img class="widget-icon" :src="item.src" alt="">
            <span class="widget-name">{{item.text}}</span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>

  export default {
      name: "accordion",
      props: {
        list: Array
      }
  }

</script>

<style scoped>
  .ewp-widget-list {
    margin: 0
  }

  .ewp-widget-list li {
    position: relative;
    display: block;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #dedede;
    border-width: 1px 0;
  }
  .ewp-widget-list > li > a{
    margin-bottom: 0;
    padding: 10px 0px 10px 10px;
    display: block;
  }

  .ewp-widget-list .widget-icon {
    width: 36px;
    height: 36px;
    margin-right: 10px
  }

  .ewp-widget-list a {
    -webkit-transition: all .15s;
    transition: all .15s
  }

  .ewp-widget-list a:hover {
    background: #F5F5F5
  }

  .ewp-widget-list a::after {
    display: inline-block;
    font-family: FontAwesome, sans-serif;
    font-weight: 400;
    font-style: normal;
    vertical-align: baseline;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\f054";
    position: absolute;
    right: 10px;
    color: #ccc;
    top: 50%;
    margin-top: -8px
  }

</style>
