<template>
    <div>
      <ul class="ewp-gallery ewp-gallery-default">
        <li v-for="item of list" :key="item.index">
          <div class="gallery-item">
            <a :href="item.url">
              <img :src="item.src" :alt="item.title" />
              <h3 class="gallery-title">远方 有一个地方 那里种有我们的梦想</h3>
              <div class="gallery-desc">2375-09-26</div>
            </a>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "gallery",
        props: {
          list: Array
        }
    }
</script>

<style scoped>
  .ewp-gallery {
    padding: 5px 5px 0 5px;
    list-style: none
  }

  .ewp-gallery h3 {
    margin: 0
  }

  [data-ewp-gallery*=pureview] img {
    cursor: pointer
  }

  .ewp-gallery-default > li {
    padding: 5px
  }

  .ewp-gallery-default .gallery-item img {
    width: 100%;
    height: auto
  }

  .ewp-gallery-default .gallery-title {
    margin-top: 10px;
    font-weight: 400;
    /*font-size: 1.4rem;*/
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #555
  }

  .ewp-gallery-default .gallery-desc {
    color: #999;
    /*font-size: 1.2rem*/
  }

  .ewp-gallery-overlay > li {
    padding: 5px
  }

  .ewp-gallery-overlay .gallery-item {
    position: relative
  }

  .ewp-gallery-overlay .gallery-item img {
    width: 100%;
    height: auto
  }

  .ewp-gallery-overlay .gallery-title {
    font-weight: 400;
    font-size: 1.4rem;
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    text-indent: 5px;
    height: 30px;
    line-height: 30px;
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
  }

  .ewp-gallery-overlay .gallery-desc {
    display: none
  }

  .ewp-gallery-bordered > li {
    padding: 5px
  }

  .ewp-gallery-bordered .gallery-item {
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .35);
    box-shadow: 0 0 3px rgba(0, 0, 0, .35);
    padding: 5px
  }

  .ewp-gallery-bordered .gallery-item img {
    width: 100%;
    height: auto
  }

  .ewp-gallery-bordered .gallery-title {
    margin-top: 10px;
    font-weight: 400;
    font-size: 1.4rem;
    color: #555;
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
  }

  .ewp-gallery-bordered .gallery-desc {
    color: #999;
    font-size: 1.2rem
  }

  .ewp-gallery-imgbordered > li {
    padding: 5px
  }

  .ewp-gallery-imgbordered .gallery-item img {
    width: 100%;
    height: auto;
    border: 3px solid #FFF;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .35);
    box-shadow: 0 0 3px rgba(0, 0, 0, .35)
  }

  .ewp-gallery-imgbordered .gallery-title {
    margin-top: 10px;
    font-weight: 400;
    font-size: 1.4rem;
    color: #555;
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
  }

  .ewp-gallery-imgbordered .gallery-desc {
    color: #999;
    font-size: 1.2rem
  }

  .ewp-gallery-one {
    padding: 0 5px;
    background-color: #fff
  }

  .ewp-gallery-one > li {
    padding: 5px
  }

  .ewp-gallery-one .gallery-item {
    padding: 5px
  }

  .ewp-gallery-one .gallery-item img {
    width: 100%;
    height: auto
  }

  .ewp-gallery-one .gallery-title {
    line-height: 34px;
    font-weight: 400;
    font-size: 1.4rem;
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #555
  }

  .ewp-gallery-one .gallery-desc {
    color: #999;
    font-size: 1.2rem
  }

  .ewp-gallery-one .gallery-more {
    width: 100%
  }

  .ewp-gallery-one .gallery-more a {
    background-color: #dfdfdf;
    color: #555;
    height: 35px;
    line-height: 35px;
    font-size: 1.4rem;
    display: block;
    text-align: center
  }
  .ewp-gallery{
    overflow: hidden;
  }
  .ewp-gallery li{
    width: 50%;
    box-sizing: border-box;
    float: left;
  }
</style>
