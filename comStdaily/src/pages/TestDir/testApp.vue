<template>
  <div id="app">
    <testssss :todoListData="todoListData"></testssss>
  </div>
</template>

<script>
    import testssss from "./testssss";
    export default {
        name: 'testApp',
        components: {
            testssss: testssss
        },
        data() {
            return {
                todoListData: {
                    todo: [
                        {
                            id: 1,
                            title: 'todo 1'
                        },
                        {
                            id: 2,
                            title: 'todo 2'
                        },
                        {
                            id: 3,
                            title: 'todo 3'
                        },
                        {
                            id: 4,
                            title: 'todo 4'
                        }
                    ],
                    doing: [
                        {
                            id: 1,
                            title: 'doing 1'
                        },
                        {
                            id: 2,
                            title: 'doing 2'
                        },
                        {
                            id: 3,
                            title: 'doing 3'
                        },
                        {
                            id: 4,
                            title: 'doing 4'
                        }
                    ],
                    done: [
                        {
                            id: 1,
                            title: 'done 1'
                        },
                        {
                            id: 2,
                            title: 'done 2'
                        },
                        {
                            id: 3,
                            title: 'done 3'
                        },
                        {
                            id: 4,
                            title: 'done 4'
                        }
                    ]
                },
                todoListData2: [
                    {
                        id: 1,
                        title: 'todo 1',
                        status: 'todo'
                    },
                    {
                        id: 2,
                        title: 'todo 2',
                        status: 'todo'
                    },
                    {
                        id: 3,
                        title: 'todo 3',
                        status: 'todo'
                    },
                    {
                        id: 4,
                        title: 'todo 4',
                        status: 'todo'
                    },
                    {
                        id: 1,
                        title: 'doing 1',
                        status: 'doing'
                    },
                    {
                        id: 2,
                        title: 'doing 2',
                        status: 'doing'
                    },
                    {
                        id: 3,
                        title: 'doing 3',
                        status: 'doing'
                    },
                    {
                        id: 4,
                        title: 'doing 4',
                        status: 'doing'
                    },
                    {
                        id: 1,
                        title: 'done 1',
                        status: 'done'
                    },
                    {
                        id: 2,
                        title: 'done 2',
                        status: 'done'
                    },
                    {
                        id: 3,
                        title: 'done 3',
                        status: 'done'
                    },
                    {
                        id: 4,
                        title: 'done 4',
                        status: 'done'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
  @label-width: 200px;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .logo {
    text-align: center;
  }
  .row {
    margin-bottom: 24px;
    vertical-align: top;
    zoom: 1;

    &__label,
    &__content {
      font-size: 14px;
    }
    &__label {
      width: @label-width;
      text-align: right;
      vertical-align: middle;
      float: left;
      color: #515a6e;
      line-height: 1;
      padding: 10px 12px 10px 0;
      box-sizing: border-box;
    }
    &__content {
      margin-left: @label-width;
      position: relative;
      line-height: 32px;
    }
  }
</style>
