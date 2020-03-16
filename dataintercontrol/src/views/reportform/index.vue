<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人报表" name="personfrom">
        <div id="demo1" class="ning">
          <div class="itemList" v-for="(item, index) in datahref" :key="index">
            <div class="content">
              <a :href="item.srchref" target="_self" style="position:relative;float:left;">
                <img :src="item.srcimg" alt="">
                <div class="text" style="position:absolute;left:0;bottom:0; float:left; height:30px; line-height:30px; padding-left:10px; font-size:16px;">{{item.srcmsg}}</div>
              </a>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公司报表" name="companyfrom">

        <div id="demo2">
          <ul>
            <li v-for="(item , index) in itemData2" :key="index">
              <div class="content">
                <div class="summary">
                  <img :src="item.img" alt="">
                </div>
                <div class="text">
                  {{item.text}}
                </div>
              </div>
            </li>
          </ul>
        </div>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

    import imgqlik from  "@/assets/img/i_qlik.png"
    import imgi123 from "@/assets/img/i_4510.png"

    export default {
        name: "",
        data() {
            return {
                activeName: 'personfrom',
                datahref:[
                    {
                        srchref: "https://10.219.100.76/extensions/test_doc/test_doc.html",
                        srcimg: imgqlik,
                        srcmsg: "Test_dr"
                    },
                    {
                        srchref: "https://10.219.100.76/extensions/Test_dr1/Test_dr1.html",
                        srcimg: imgqlik,
                        srcmsg: "Test_dr1"
                    },
                    {
                        srchref: "https://10.219.100.76/extensions/test_dr2/test_dr2.html",
                        srcimg: imgqlik,
                        srcmsg: "Test_dr2"
                    }
                ],
                itemData2: [
                    {
                        img: imgi123,
                        text: "TS_Demo"
                    },
                    {
                        img: imgi123,
                        text: "测试__张磊"
                    }
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
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

  #demo2{

      ul{
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        overflow: hidden;
        padding-left: 0px;
      }

      li{
          width: 150px;
          height: 160px;
          list-style-type: none;
          float: left;

          .content{
              .summary{
                padding: 20px;

                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .text{
                text-align: center;
              }
          }
      }
  }

</style>
