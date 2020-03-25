<template>
  <div id="demo5">
    <ul>
      <li v-for="(item, index) in itemData1" :key="index">
        <div class="content">
          <div class="summary">
            <div @click="handleTest(item.href)" style="position: relative;float: left;">
              <img :src="item.img" alt="">
            </div>
          </div>
          <div class="word">
            <div class="title">
              {{item.title}}
            </div>
            <div class="info">
              <p>发布时间：2020.02.04</p>
              <p>创建日期：2020.02.04</p>
              <p>报表描述：测试图表1</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

    // import imgqlik from  "@/assets/img/i_qlik.png"
    import imgi4701 from "@/assets/img/i_4701.png"

    export default {
        data(){
            return{
                toqlikview: "/qlikview/index",
                itemData1: [
                    {
                        title: "Test_dr",
                        img: imgi4701,
                        info: {
                            p1: "2020.02.04",
                            p2: "2020.02.04",
                            p3: "TS_Demo",
                        },
                        href: "https://10.219.100.76/extensions/test_doc/test_doc.html",
                    },
                    {
                        title: "Test_dr1",
                        img: imgi4701,
                        info: {
                            p1: "2020.02.04",
                            p2: "2020.02.04",
                            p3: "TS_Demo",
                        },
                        href: "https://10.219.100.76/extensions/Test_dr1/Test_dr1.html",
                    },
                    {
                        title: "Test_dr2",
                        img: imgi4701,
                        info: {
                            p1: "2020.02.04",
                            p2: "2020.02.04",
                            p3: "TS_Demo",
                        },
                        href: "https://10.219.100.76/extensions/Test_dr1/Test_dr2.html",
                    }
                ],
            }
        },
        methods:{
            handleTest(srchref){
                this.$store.commit('mutationsIframeSrc', srchref);
                console.log(this.$store.state.stateIframeSrc);
                this.$router.push(this.toqlikview);
            }
        },
    }
</script>

<style lang="less" scoped>

  #demo5{
      padding: 10px;
      float: left;

      /deep/ ul{
          list-style-type: none;
          padding-left: 0px;

          li{
              width: calc(~"50% - 20px");
              min-width: 540px;
              height: 140px;
              padding: 10px;
              float: left;

              .summary{
                  width: 164px;
                  height: 140px;
                  float: left;

                  img{
                    width: auto;
                    height: 100%;
                  }
              }

              .word{
                  width: calc(~"100% - 200px");
                  height: 140px;
                  padding-left: 10px;
                  box-sizing: border-box;
                  float: left;

                  .title{
                      width: 100%;
                      height: 30px;
                      line-height: 30px;
                      font-size: 18px;
                      cursor: pointer;
                  }
                  .info{
                      width: 100%;
                      height: calc(~"100% - 70px");
                      cursor: pointer;

                      p{
                        margin-top: 10px;
                        color: #bdbbbb;
                      }
                  }

                  .edit{
                      width: 100%;
                      height: 30px;

                      .cell{
                          width: 80px;
                          height: 100%;
                          float: left;

                          span{
                            width: 30px;
                            height: 30px;
                            line-height: 30px;
                            padding-top: 5px;
                            padding-left: 5px;
                            display: block;
                            box-sizing: border-box;
                            border-radius: 4px;
                            float: left;

                            svg{
                              width: 80%;
                              height: 80%;
                            }
                          }
                          & > .icon-text{
                            white-space: nowrap;
                          }
                          &:nth-child(1) > .icon{
                             background-image: linear-gradient(to left, #30cfd0 0%, #00a2e8 100%);
                           }
                          &:nth-child(2) > .icon{
                             background-image: linear-gradient(to left, #30d0d0 0%, #007de8 100%);
                           }
                          &:nth-child(3) > .icon{
                             background-image: linear-gradient(to left, #309cd0 0%, #0072e8 100%);
                           }
                          &:nth-child(4) > .icon{
                             background-image: linear-gradient(to left, #30d086 0%, #00dde8 100%);
                          }
                      }
                  }
              }
          }
      }
  }

</style>
