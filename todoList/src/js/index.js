var todo = new Vue({
    el: "#todo",
    data: {
        title: '',
        willDo: [],
        doneList: [],
    },
    beforeMount:function(){
        // 加载localstorage
        var storage=window.localStorage;
        if(storage.getItem("todo") !== null){
            this.willDo = JSON.parse(storage.getItem("todo"));
        }
        if(storage.getItem("done") !== null){
            this.doneList = JSON.parse(storage.getItem("done"));
        }
    },
    methods: {
        addTodo: function() {
            if (this.title === '') { return ''; }
            this.willDo.unshift({ title: this.title, done: false });
            this.title = '';
            this.setLocalStorage();
        },
        deleteWillTodo: function(index) {
            this.willDo.splice(index, 1);
            this.setLocalStorage();
        },
        deleteDoneTodo: function(index) {
            this.doneList.splice(index, 1);
            this.setLocalStorage();
        },
        checkedTodo:function(index){
            this.willDo[index].done = true;
            this.doneList.unshift(this.willDo[index]);
            this.willDo.splice(index,1);
            this.setLocalStorage();
        },
        checkedDone:function(index){
            this.doneList[index].done = false;
            this.willDo.unshift(this.doneList[index]);
            this.doneList.splice(index,1);
            this.setLocalStorage();
        },
        setLocalStorage:function(){
            // 存储localstorage
            var storage=window.localStorage;
            storage.setItem("todo",JSON.stringify(this.willDo));
            storage.setItem("done",JSON.stringify(this.doneList));
        }
    }
});