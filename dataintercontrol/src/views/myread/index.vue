<template>
    <div id="demo1">
        <div class="itemList" v-for="(item, index) in datahref" :key="index">
          <div class="content">
            <a :href="item.srchref" target="_self" @click="handleTest(item.srchref)" style="position:relative;float:left;">
                <img :src="item.srcimg" alt="">
                <div class="text" style="position:absolute;left:0;bottom:0; float:left; height:30px; line-height:30px; padding-left:10px; font-size:16px;">Test_dr</div>
            </a>
          </div>
          <div class="word">
            <div class="item">
              <svgeye></svgeye>
              <span>4</span>
            </div>
            <div class="item">
              <svgread></svgread>
              <span>4</span>
            </div>
            <div class="item">
              <svgzan></svgzan>
              <span>6</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

  // import {}
  import svgeye from "@/assets/svg/svgeye"
  import svgread from "@/assets/svg/svgread"
  import svgzan from "@/assets/svg/svgzan"
  import imgqlik from  "@/assets/img/i_qlik.png"

  export default {
      name: "",
      data(){
          return{
              datahref:[
                  {
                      srchref: "https://10.219.100.76/extensions/test_doc/test_doc.html",
                      srcimg: imgqlik,
                      srcmsg: {
                          1: "6",
                          2: "4",
                          3: "12"
                      }
                  },
                  {
                      srchref: "https://10.219.100.76/extensions/Test_dr1/Test_dr1.html",
                      srcimg: imgqlik,
                      srcmsg: {
                          1: "6",
                          2: "4",
                          3: "12"
                      }
                  },
                  {
                      srchref: "https://10.219.100.76/extensions/test_dr2/test_dr2.html",
                      srcimg: imgqlik,
                      srcmsg: {
                          1: "6",
                          2: "4",
                          3: "12"
                      }
                  }
              ]
          }
      },
      components: {
          svgeye,
          svgread,
          svgzan
      },
      methods:{
          handleTest(srchref){
              this.$store.commit('mutationsIframeSrc', srchref);
              console.log(this.$store.state.stateIframeSrc);
          }
      },
      created(){
      }
  }

</script>

<style lang="less" scoped>
  #demo1 {
    &.ning {
      padding-left: 10px;
      overflow: hidden;

    .itemList {
      height: 200px;
    }

    .word {
      display: none;
    }

    }
    .itemList {
      width: 200px;
      height: 240px;
      box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.25);
      margin: 12px;
      float: left;

    .content {

      img {
        width: 100%;
        height: 100%;
      }

    }
      .word {
        width: 100%;
        margin-top: 10px;
        float: left;

        .item {
          width: 33.33%;
          float: left;
          padding-left: 10px;
          box-sizing: border-box;

        svg {
          width: 20px;
          height: 20px;
          float: left;
        }

          span {
            height: 20px;
            line-height: 20px;
            padding-left: 5px;
          }

        }
      }
    }
  }
</style>
