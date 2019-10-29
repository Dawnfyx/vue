<template>
  <div class="todo-contain">
    <h1>TODOS</h1>
    <div class="todolist-contain">
      <header>
        <nav>
          <a v-for="(item,index) in tabListMap" :key="index" :class="currentTabKey==index ? 'active':''" @click="changeTab(index)">
            {{item}}
          </a>
        </nav>
        <div class="todo-add">
          <input type="text" ref="addInput" v-model="addTodoText" placeholder="请输入待办事项" />
          <button @click="handleAddTodo()">添加</button>
        </div>
        <span class="todo-count">{{totalTodoCount}}个待办</span>
      </header>
      <div class="todo-list">
        <ul>
          <li v-for="(item ,index) in filterTodoList" :key="index" :class=" (item.checked && currentTabKey!='done') ?'done':''">
            <label>
              <template v-if="item.status!='done' && currentTabKey!='done'">
                <input type="checkbox" :value="item.id" v-model="item.checked" />
              </template>
              {{item.title}}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'testssss',
        props: {
            todoListData: {
                default: []
            }
        },
        data() {
            return {
                todoListData_: {},
                tabListMap: {
                    all: '全部',
                    todo: '待办',
                    doing: '进行中',
                    done: '已完成'
                },
                currentTabKey: 'all',
                addTodoText: ''
            }
        },
        created() {
            this.todoListData_ = [...this.todoListData] //深拷贝
        },
        computed: {
            filterTodoList: function() {
                var key = this.currentTabKey
                var todoListData_ = this.todoListData_
                return todoListData_.filter(function(item) {
                    if (key === 'all') {
                        return item
                    } else if (key === 'done') {
                        return item.status == key || item.checked == true
                    } else {
                        return item.status == key
                    }
                })
            },
            totalTodoCount() {
                var count = 0
                this.todoListData_.forEach(function(item, index) {
                    if (item.status === 'todo' && item.checked !== true) {
                        count++
                    }
                })
                return count
            }
        },
        methods: {
            changeTab(selectedTab) {
                this.currentTabKey = selectedTab
            },
            handleAddTodo() {
                var newData = {
                    title: this.addTodoText,
                    status: 'todo'
                }
                this.todoListData_.unshift(newData) //从头加入
                this.addTodoText = '' //清空添加输入框
            }
        }
    }
</script>

<style>
  html,
  body {
    background: #f5f5f5;
    margin: 0;
    padding: 0;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  a {
    cursor: pointer;
  }
  .todo-contain {
    width: 500px;
    margin: 0 auto;
  }
  .todo-contain h1 {
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #ecd7d7;
    line-height: 60px;
    margin-bottom: 10px;
  }
  .todolist-contain {
    border: 1px solid #ccc;
    background: #fff;
  }
  .todolist-contain header {
    position: relative;
  }
  .todolist-contain nav {
    text-align: center;
    padding: 5px 0;
    border-bottom: 1px solid #e5e5e5;
  }
  .todolist-contain nav a {
    display: inline-block;
    padding: 3px 10px;
    font-size: 14px;
    color: #94786e;
    text-decoration: none;
  }
  .todolist-contain nav a.active {
    border: 1px solid #ecd7d7;
    border-radius: 5px;
  }
  .todo-count {
    position: absolute;
    left: 10px;
    top: 8px;
    font-size: 14px;
  }
  .todo-add {
    padding: 5px 0;
    border-bottom: 1px solid #e5e5e5;
  }
  .todo-add input {
    border: 0 none;
    font-size: 24px;
    padding: 5px 15px;
    width: 400px;
  }
  .todo-add button {
    border: 0 none;
    background: #2695ee;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .todo-list li {
    list-style: none;
    border-bottom: 1px solid #e5e5e5;
    font-size: 24px;
    padding: 10px 10px 10px 50px;
    position: relative;
    color: #534d4e;
  }
  .todo-list li input {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 3px;
    background: none;
    -webkit-appearance: none;
    appearance: none;
  }
  .todo-list li input:focus {
    outline: none;
  }
  .todo-list li input:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    display: block;
  }
  .todo-list li input:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
  .todo-list li.done {
    font-style: italic;
    color: #dadbdb;
    text-decoration: line-through;
  }
  .todo-list li:last-child {
    border-bottom: 0;
  }
</style>
