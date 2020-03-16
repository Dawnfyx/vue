<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="分析报表" name="linefrom">

        <div id="demo3">
          <ul>
            <li v-for="(item, index) in itemData1" :key="index">
              <div class="content">
                <div class="summary">
                  <img :src="item.img" alt="">
                </div>
                <div class="word">
                  <div class="title">
                    {{item.title}}
                  </div>
                  <div class="info">
                    <p>发布时间：{{item.info.p1}}</p>
                    <p>创建日期：{{item.info.p2}}</p>
                    <p>报表描述：{{item.info.p3}}</p>
                  </div>
                  <div class="edit">
                    <div class="cell">
                      <span class="icon icon-edit">
                      </span>
                      <span class="icon-text">
                          编辑
                      </span>
                    </div>
                    <div class="cell">
                      <span class="icon icon-edit">
                          <svg t="1583819851263" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3061" width="200" height="200"><path d="M668.8 896h-320c-48.64 0-88.32-37.76-92.8-87.68L211.2 403.2c-1.92-17.28 10.88-33.28 28.16-35.2 17.28-1.92 33.28 10.88 35.2 28.16l44.16 405.76c1.28 17.28 14.08 30.08 28.8 30.08h320c14.72 0 27.52-12.8 28.8-29.44l44.16-406.4c1.92-17.28 17.92-30.08 35.2-28.16 17.28 1.92 30.08 17.92 28.16 35.2l-44.16 405.76c-2.56 49.28-42.88 87.04-90.88 87.04zM826.24 321.28H190.72c-17.92 0-32-14.08-32-32s14.08-32 32-32h636.16c17.92 0 32 14.08 32 32s-14.72 32-32.64 32z" fill="#ffffff" p-id="3062"></path><path d="M424.96 789.12c-16.64 0-30.72-12.8-32-29.44l-27.52-347.52c-1.28-17.92 11.52-33.28 29.44-34.56 17.92-1.28 33.28 11.52 34.56 29.44l27.52 347.52c1.28 17.92-11.52 33.28-29.44 34.56h-2.56zM580.48 789.12h-2.56c-17.92-1.28-30.72-16.64-29.44-34.56L576 407.04c1.28-17.92 16.64-30.72 34.56-29.44 17.92 1.28 30.72 16.64 29.44 34.56l-27.52 347.52c-1.92 16.64-15.36 29.44-32 29.44zM581.76 244.48c-17.92 0-32-14.08-32-32 0-23.68-19.2-43.52-43.52-43.52s-43.52 19.2-43.52 43.52c0 17.92-14.08 32-32 32s-32-14.08-32-32c0-59.52 48-107.52 107.52-107.52s107.52 48 107.52 107.52c0 17.28-14.08 32-32 32z" fill="#ffffff" p-id="3063"></path></svg>
                      </span>
                      <span class="icon-text">
                          删除
                      </span>
                    </div>
                    <div class="cell">
                      <span class="icon icon-edit">
                          <svg t="1583819885058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4392" width="200" height="200"><path d="M974.592 42.944C965.76 35.776 954.944 32 944 32c-7.296 0-14.656 1.664-21.44 5.056l-864 432C43.392 476.672 33.344 491.712 32.128 508.608c-1.216 16.896 6.656 33.216 20.544 42.88l219.456 151.872c0 0.256-0.128 0.448-0.128 0.64l0 240c0 20.8 13.44 39.232 33.28 45.696C310.144 991.232 315.136 992 320 992c15.104 0 29.76-7.104 38.912-19.904l100.416-139.136 217.344 150.528C684.8 989.12 694.4 992 704 992c5.504 0 11.072-0.96 16.384-2.88 14.592-5.248 25.728-17.344 29.888-32.256l240-864C995.392 74.56 989.184 54.976 974.592 42.944zM295.168 660.992 80 512l728.256-364.096L295.168 660.992zM320 944 320 704l624-624L320 944zM704 944l-216.512-149.888 419.52-580.864L704 944z" p-id="4393" fill="#ffffff"></path></svg>
                      </span>
                      <span class="icon-text">
                          发布
                      </span>
                    </div>
                    <div class="cell">
                      <span class="icon icon-edit">
                          <svg t="1583819930620" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9286" width="200" height="200"><path d="M169.1 434l296.6 188.6c14.7 9.4 31.6 14.3 49 14.3s34.4-4.9 49-14.2L860.3 434c18.8-11.9 30-32.4 30-54.6s-11.2-42.7-30-54.6L563.7 136.1c-29.3-18.7-68.7-18.6-98 0L169.1 324.8c-18.8 11.9-30 32.3-30 54.6 0 22.2 11.2 42.7 30 54.6z" p-id="9287" fill="#ffffff"></path><path d="M858.3 521.2L544.5 724.1c-20.7 13.4-46.6 13.4-67.3 0.1l-311-202.9c-8-5.3-18.7-3-24 5-5.3 8-3 18.8 5 24l311.1 203c16.2 10.4 34.4 15.6 52.5 15.6s36.3-5.2 52.5-15.6l313.8-203.1c8-5.1 10.3-15.9 5.1-23.9-5.1-8-15.9-10.3-23.9-5.1z" p-id="9288" fill="#ffffff"></path><path d="M858.3 648.6L544.5 851.5c-20.8 13.4-46.7 13.4-67.4 0.1l-311-202.9c-8-5.3-18.7-3-24 5-5.2 8-2.9 18.8 5.1 24l311.1 203c16.2 10.4 34.4 15.6 52.5 15.6s36.3-5.2 52.5-15.7l313.8-203c8-5.1 10.3-15.9 5.1-23.9-5.1-8-15.9-10.3-23.9-5.1z" p-id="9289" fill="#ffffff"></path></svg>
                      </span>
                      <span class="icon-text">
                          <a href="https://10.219.100.76/sense/app/c2430c8a-25c3-4d25-8b93-2a7148fbceda" class="topages">设计报表</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </el-tab-pane>
      <el-tab-pane label="大屏展示" name="bigscreen">

        <div id="demo4">
          <ul>
            <li v-for="(item, index) in itemData2" :key="index">
              <div class="content">
                <div class="summary">
                  <img :src="item.img" alt="">
                </div>
                <div class="word">
                  <div class="title">
                    {{item.title}}
                  </div>
                  <div class="info">
                    <p>发布时间：{{item.info.p1}}</p>
                    <p>创建日期：{{item.info.p2}}</p>
                    <p>报表描述：{{item.info.p3}}</p>
                  </div>
                  <div class="edit">
                    <div class="cell">
                                                    <span class="icon icon-edit">
                                                        <svg t="1583810312707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2277" width="200" height="200"><path d="M684.24 990.996H89.146C39.992 990.996 0 951.008 0 901.854V122.144c0-49.154 39.992-89.142 89.146-89.142H684.24c49.154 0 89.142 39.99 89.142 89.142V379.36c0 16.776-13.6 30.376-30.376 30.376s-30.376-13.6-30.376-30.376V122.144c0-15.656-12.736-28.392-28.392-28.392H89.146c-15.656 0-28.394 12.736-28.394 28.392v779.706c0 15.656 12.736 28.392 28.394 28.392H684.24c15.656 0 28.392-12.736 28.392-28.392v-101.278c0-16.776 13.6-30.376 30.376-30.376s30.376 13.598 30.376 30.376v101.278c-0.002 49.158-39.99 89.146-89.144 89.146z" fill="#ffffff" p-id="2278"></path><path d="M215.072 197.108h343.24v123.528h-343.24z" fill="#ffffff" p-id="2279"></path><path d="M558.31 351.01H215.072c-16.776 0-30.376-13.598-30.376-30.376V197.112c0-16.776 13.6-30.376 30.376-30.376h343.238c16.776 0 30.376 13.6 30.376 30.376v123.528c0 16.772-13.6 30.37-30.376 30.37zM245.448 290.26h282.488v-62.774H245.448v62.774zM993.624 351.408a30.268 30.268 0 0 1-21.478-8.896l-78.59-78.59-61.652 61.652c-11.858 11.862-31.092 11.864-42.956 0-11.862-11.862-11.862-31.096 0-42.956l83.132-83.132c11.862-11.858 31.092-11.862 42.956 0l100.068 100.068c11.862 11.862 11.862 31.096 0 42.96a30.282 30.282 0 0 1-21.48 8.894z" fill="#ffffff" p-id="2280"></path><path d="M810.426 304.096l-382.9 382.898-15.972 116.04 116.04-15.97 382.9-382.9z" fill="#ffffff" p-id="2281"></path><path d="M411.554 833.41a30.376 30.376 0 0 1-30.09-34.518l15.972-116.04a30.37 30.37 0 0 1 8.612-17.338l382.898-382.898a30.374 30.374 0 0 1 42.956 0l100.068 100.068c11.862 11.862 11.862 31.096 0 42.956L549.074 808.544a30.37 30.37 0 0 1-17.338 8.612l-116.036 15.972c-1.386 0.188-2.77 0.282-4.146 0.282z m44.67-132.158l-9.116 66.228 66.224-9.116 354.2-354.2-57.112-57.112-354.196 354.2z" fill="#ffffff" p-id="2282"></path><path d="M411.554 833.41h-196.482c-16.776 0-30.376-13.598-30.376-30.376s13.6-30.376 30.376-30.376h196.482c16.776 0 30.376 13.598 30.376 30.376s-13.598 30.376-30.376 30.376z" fill="#ffffff" p-id="2283"></path></svg>
                                                    </span>
                      <span class="icon-text">
                                                        编辑
                                                    </span>
                    </div>
                    <div class="cell">
                                                    <span class="icon icon-edit">
                                                        <svg t="1583819851263" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3061" width="200" height="200"><path d="M668.8 896h-320c-48.64 0-88.32-37.76-92.8-87.68L211.2 403.2c-1.92-17.28 10.88-33.28 28.16-35.2 17.28-1.92 33.28 10.88 35.2 28.16l44.16 405.76c1.28 17.28 14.08 30.08 28.8 30.08h320c14.72 0 27.52-12.8 28.8-29.44l44.16-406.4c1.92-17.28 17.92-30.08 35.2-28.16 17.28 1.92 30.08 17.92 28.16 35.2l-44.16 405.76c-2.56 49.28-42.88 87.04-90.88 87.04zM826.24 321.28H190.72c-17.92 0-32-14.08-32-32s14.08-32 32-32h636.16c17.92 0 32 14.08 32 32s-14.72 32-32.64 32z" fill="#ffffff" p-id="3062"></path><path d="M424.96 789.12c-16.64 0-30.72-12.8-32-29.44l-27.52-347.52c-1.28-17.92 11.52-33.28 29.44-34.56 17.92-1.28 33.28 11.52 34.56 29.44l27.52 347.52c1.28 17.92-11.52 33.28-29.44 34.56h-2.56zM580.48 789.12h-2.56c-17.92-1.28-30.72-16.64-29.44-34.56L576 407.04c1.28-17.92 16.64-30.72 34.56-29.44 17.92 1.28 30.72 16.64 29.44 34.56l-27.52 347.52c-1.92 16.64-15.36 29.44-32 29.44zM581.76 244.48c-17.92 0-32-14.08-32-32 0-23.68-19.2-43.52-43.52-43.52s-43.52 19.2-43.52 43.52c0 17.92-14.08 32-32 32s-32-14.08-32-32c0-59.52 48-107.52 107.52-107.52s107.52 48 107.52 107.52c0 17.28-14.08 32-32 32z" fill="#ffffff" p-id="3063"></path></svg>
                                                    </span>
                      <span class="icon-text">
                                                        删除
                                                    </span>
                    </div>
                    <div class="cell">
                                                    <span class="icon icon-edit">
                                                        <svg t="1583819885058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4392" width="200" height="200"><path d="M974.592 42.944C965.76 35.776 954.944 32 944 32c-7.296 0-14.656 1.664-21.44 5.056l-864 432C43.392 476.672 33.344 491.712 32.128 508.608c-1.216 16.896 6.656 33.216 20.544 42.88l219.456 151.872c0 0.256-0.128 0.448-0.128 0.64l0 240c0 20.8 13.44 39.232 33.28 45.696C310.144 991.232 315.136 992 320 992c15.104 0 29.76-7.104 38.912-19.904l100.416-139.136 217.344 150.528C684.8 989.12 694.4 992 704 992c5.504 0 11.072-0.96 16.384-2.88 14.592-5.248 25.728-17.344 29.888-32.256l240-864C995.392 74.56 989.184 54.976 974.592 42.944zM295.168 660.992 80 512l728.256-364.096L295.168 660.992zM320 944 320 704l624-624L320 944zM704 944l-216.512-149.888 419.52-580.864L704 944z" p-id="4393" fill="#ffffff"></path></svg>
                                                    </span>
                      <span class="icon-text">
                                                        发布
                                                    </span>
                    </div>
                    <div class="cell">
                                                    <span class="icon icon-edit">
                                                        <svg t="1583819930620" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9286" width="200" height="200"><path d="M169.1 434l296.6 188.6c14.7 9.4 31.6 14.3 49 14.3s34.4-4.9 49-14.2L860.3 434c18.8-11.9 30-32.4 30-54.6s-11.2-42.7-30-54.6L563.7 136.1c-29.3-18.7-68.7-18.6-98 0L169.1 324.8c-18.8 11.9-30 32.3-30 54.6 0 22.2 11.2 42.7 30 54.6z" p-id="9287" fill="#ffffff"></path><path d="M858.3 521.2L544.5 724.1c-20.7 13.4-46.6 13.4-67.3 0.1l-311-202.9c-8-5.3-18.7-3-24 5-5.3 8-3 18.8 5 24l311.1 203c16.2 10.4 34.4 15.6 52.5 15.6s36.3-5.2 52.5-15.6l313.8-203.1c8-5.1 10.3-15.9 5.1-23.9-5.1-8-15.9-10.3-23.9-5.1z" p-id="9288" fill="#ffffff"></path><path d="M858.3 648.6L544.5 851.5c-20.8 13.4-46.7 13.4-67.4 0.1l-311-202.9c-8-5.3-18.7-3-24 5-5.2 8-2.9 18.8 5.1 24l311.1 203c16.2 10.4 34.4 15.6 52.5 15.6s36.3-5.2 52.5-15.7l313.8-203c8-5.1 10.3-15.9 5.1-23.9-5.1-8-15.9-10.3-23.9-5.1z" p-id="9289" fill="#ffffff"></path></svg>
                                                    </span>
                      <span class="icon-text">
                                                        <a href="https://10.219.100.76/sense/app/c2430c8a-25c3-4d25-8b93-2a7148fbceda" class="topages">设计报表</a>
                                                    </span>
                    </div>
                  </div>
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

    import imgi4701 from "@/assets/img/i_4701.png"
    import svgedit from "@/assets/svg/svgedit"
    import svgdelete from "@/assets/svg/svgdelete"
    import svgsend from "@/assets/svg/svgsend"
    import svgartfrom from "@/assets/svg/svgartfrom"

    export default {
        data(){
            return{
                activeName: 'linefrom',
                itemData1: [
                    {
                        title: "TS_Demo",
                        img: imgi4701,
                        info: {
                            p1: "2020.02.04",
                            p2: "2020.02.04",
                            p3: "TS_Demo",
                        }
                    },
                    {
                        title: "测试__张磊",
                        img: imgi4701,
                        info: {
                            p1: "2020.02.04",
                            p2: "2020.02.04",
                            p3: "TS_Demo",
                        }
                    }
                ],
                itemData2: [
                    {
                        title: "大屏demo1",
                        img: imgi4701,
                        info: {
                            p1: "2020.02.04",
                            p2: "2020.02.04",
                            p3: "TS_Demo",
                        }
                    }
                ]
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="less" scoped>
  #demo3,
  #demo4{
    width: calc(~"100% - 150px");
    float: left;

    ul{
      list-style-type: none;
      padding-left: 0px;

      li{
        width: calc(~"50% - 20px");
        min-width: 540px;
        height: 160px;
        padding: 10px;
        float: left;

        .summary{
          width: 200px;
          height: 160px;
          float: left;

          img{
            width: 100%;
            height: 100%;
          }
        }
      .word{
        width: calc(~"100% - 200px");
        height: 160px;
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

        p{
          margin-top: 10px;
          margin-bottom: 0px;
          color: #bdbbbb;
          cursor: pointer;
        }
      }
      .edit{
        width: 100%;
        height: 30px;

        .cell{
          width: auto;
          min-width: 18%;
          height: 100%;
          padding-right: 10px;
          float: left;
          cursor: pointer;


          .icon{
            width: 25px;
            height: 25px;
            padding-top: 2px;
            padding-left: 2px;
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
              width: 30px;
              height: 30px;
              padding-left: 5px;
              line-height: 26px;
              font-size: 14px;

            a{
              text-decoration: none;
              color: #333;
              font-size: 14px;
            }
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

  .el-tabs__header{
    margin-bottom: 0px;
  }

</style>
