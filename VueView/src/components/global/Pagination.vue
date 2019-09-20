<template>
  <div class="pagination" v-if="totalPage>1">
    <span class="pagination-text"> 共条{{totalCount}}记录</span>
    <ul class="pagination-paging">
      <li class="prev" :class="{'disabled': currentPage <= 1}"  @click="currentPage<=1?'':turnPage(currentPage-1)">
        <i class="fa fa-arrow-left"></i>
      </li>
      <li v-for="item in showPageBtn" :key="item" class="num" :class="{'active': item == currentPage
      }" @click="item==='-'?turnPage(currentPage-1):item==='+'? turnPage(currentPage+1):turnPage(item)">
        {{item}}
      </li>
      <li class="next" :class="{'disabled' : currentPage >= totalPage}"  @click="currentPage>=totalPage?'':turnPage(currentPage+1)">
        <i class="fa fa-arrow-right"></i>
      </li>
    </ul>
    <select v-if="!small" v-model="limitNum" @change="turnPage(currentPage)">
      <option v-for="item in limitNums" :key="item" :value="item">{{item}}条/页</option>
    </select>
    <span v-if="all" class="pagination-jump">
       跳转
      <input type="number" autocomplete="off" min="1" :max="totalPage" v-model="goPage" @keyup.enter="turnPage(goPage)"> 页
    </span>
  </div>
</template>

<script>

  export default {
    name: "Pagination",
    data() {
      return {
        goPage: '',
        limitNum: '',
        limitNums: [5, 10, 15, 20, 25, 30]
      }
    },
    props: {
      currentPage: {//当前页
        type: Number,
        default: 1,
      },
      limit: { //每页显示条数
        type: Number,
        default: 10,
      },
      totalCount: { //总计数
        type: Number,
        required: true,
      },
      small: {
        type: Boolean,
        default: false,
      },
      all: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      totalPage() { //全部页数
        return Math.ceil(this.totalCount / this.limit)
      },
      showPageBtn() {
        let pageNum = Number(this.totalPage),
          index = Number(this.currentPage),
          arr = [];
        if (pageNum <= 9) {
          for (let i = 1; i <= pageNum; i++) {
            arr.push(i);
          }
          return arr;
        }
        if (index < 5) return [1, 2, 3, 4, 5, 6, 7, "+", pageNum];
        if (index >= pageNum - 1)
          return [
            1,
            2,
            "-",
            pageNum - 5,
            pageNum - 4,
            pageNum - 3,
            pageNum - 2,
            pageNum - 1,
            pageNum
          ];
        if (index === pageNum - 2)
          return [
            1,
            2,
            "-",
            pageNum - 5,
            pageNum - 4,
            pageNum - 3,
            pageNum - 2,
            pageNum - 1,
            pageNum
          ];
        return [
          1,
          "-",
          index - 2,
          index - 1,
          index,
          index + 1,
          index + 2,
          "+",
          pageNum
        ];
      }
    },
    methods: {
      initLimitNums() {
        this.limitNum = this.limit;
        //if (this.limitNums.indexOf(this.limit) == -1) {
        if (!this.limitNums.includes(this.limit)) {
          this.limitNums.push(this.limit);
          this.limitNums.sort(function (a, b) {
            return a - b;
          });
        }
      },
      turnPage(page) { //翻页，条数变化
        let jumpNum = parseInt(Number(page));
        if (jumpNum < 1) {
          jumpNum = 1;
        } else if (jumpNum > this.totalPage) {
          jumpNum = this.totalPage;
        }

        if (this.limitNum !== this.limit && this.limitNum !== '') {
          let pages = Math.ceil(this.totalCount / this.limitNum);
          if (page > pages) {
            jumpNum = pages;
          }
          this.$emit('update:limit', this.limitNum);
        }
        this.$emit('update:currentPage', jumpNum);
        // console.log("currentPage====", this.$data.currentPage);
        this.$emit('turnPage');
      }
    },
    created: function () {
      this.initLimitNums();
    },
  }


</script>

<style scoped>
  .pagination {
    border: 1px solid red;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .pagination .pagination-text {

  }

  .pagination .pagination-paging {
    list-style: none;
    padding-left: 0px;
    overflow: hidden;
  }

  .pagination .pagination-paging li {
    border: 1px solid #999999;
    width: 32px;
    height: 32px;
    line-height: 32px;
    float: left;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;
  }

  .pagination .pagination-paging li.disabled {
    opacity: 0.5;
    cursor: no-drop;
  }

  .pagination .pagination-paging li.active {
    border-color: red;
    color: red;
  }
  .pagination .prev,
  .pagination .next{
    font-size: 14px;
  }
  .pagination .pagination-jump {

  }
</style>
