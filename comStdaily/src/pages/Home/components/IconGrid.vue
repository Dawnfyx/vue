<template>
  <ul class="grid">
    <li v-for="(item, key) of HomeData.icon" :key="item.id" :id="item.id" class="icon">
      <router-link :to="item.url">
        <div class="icon-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "iconGrid",
    props:{
      HomeData: {}
    }
  }
</script>

<style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0px;
    margin: 0px auto;
  }
  .grid li {
    width: 33.33%;
    height: 130px;
    line-height: 100px;
    list-style-type: none;
    text-align: center;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-top: -1px;
    margin-left: -1px;
  }

  .grid li:nth-child(3n+1) {
    margin-left: 0;
  }

  .grid li:hover {
    z-index: 2;
  }

  .icon a{
    color: #333333;
  }

  .icon .icon-img {
    width: 100%;
    height: 6rem;
  }

  .icon .icon-img img {
    width: 50%;
    height: auto;
    border-radius: 10px;
  }
  .icon .icon-desc{
    height: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 0;
  }
</style>
