<template>
    <ul class="list">
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "alphabet",
        data: function(){
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        props: {
          contacts: Object
        },
        computed: {
          letters (){ //字母编号
            const letters = [];
            for( let i in this.contacts){
              letters.push(i);
            }
            return letters;
          }
        },
        methods:{
            handleTouchStart(){
                this.touchStatus = true;
            },
            handleTouchEnd(){
                this.touchStatus = false;
            },
            handleTouchMove(e){
                if(this.touchStatus){
                    if(this.timer){
                      clearTimeout(this.timer);
                    }
                    // setTimeout()性能优化
                    this.timer = setTimeout(()=>{
                        const touchY = e.touches[0].clientY - 43;
                        const index = Math.floor((touchY - this.startY) / 20); //20是每个字母格子的高度
                        if (index >= 0 && index < this.letters.length) {
                          this.$emit('change', this.letters[index])
                        }
                    }, 16);
                }
            },
            handleLetterClick(e){
                // console.log("alphabet Page Click", e);
                this.$emit("change", e.target.innerText);
            }
        },
        updated: function () {
          this.startY = this.$refs['A'][0].offsetTop;
        }
    }
</script>

<style scoped lang="less">

  @import '~style/mainColor';

  * { touch-action: none; }
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 3rem;
    right: 1rem;
    bottom: 0;
    padding-left: 0px;
  }
  .item{
    list-style-type: none;
    text-align: center;
    font-size: 0.8rem;
    width: 20px;
    color: @cl333;
  }
</style>
