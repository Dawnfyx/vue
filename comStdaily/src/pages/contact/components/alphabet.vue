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
        props: {
          contacts: Object
        },
        data: function(){
          return {
             touchStatus: false,
             startY: 0,
             timer: null
          }
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
                        const touchY = e.touches[0].clientY;
                        const index = Math.floor((touchY - this.startY) / 20); //20是每个字母格子的高度
                        if (index >= 0 && index < this.letters.length) {
                          this.$emit('change', this.letters[index])
                        }
                    }, 16);
                }
            },
            handleLetterClick(e){
              this.$emit("change", e.target.innerText);
            }
        },
        updated: function () {
          this.startY = this.$refs['A'][0].offsetTop;
        }
    }
</script>

<style scoped>
  * { touch-action: none; }
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0;
    width: .4rem;
  }
  .item{
    list-style-type: none;
    text-align: center;
    font-size: 18px;
    width: 20px;
    color: green;
  }
</style>
