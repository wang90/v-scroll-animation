<template>
    <div :class="['vue-roll-box','vue-roll-loop']" 
        :style = "'height:' + currentH + 'px;'" >
        <div :class="['vue-roll-loop']" 
            :style="'transform: translateY('+ translateY +'px)'" id="list">
           <slot ref="slot"></slot>
        </div>
    </div>

</template>
<style scoped>
    .vue-roll-box {
        overflow: hidden;
        width: 100%;
    }
    .vue-roll-loop { 
        transition: all 0.4s;
    }
</style>
<script>
import { height } from "./config.js";
export default {
    name: 'vueRollLoop',
    props:{
        height: {
            default: height,
            type: Number,
        }
    },
    data() {
        return {
            currentH: height,
            'classname': '',
            'translateY':0,
        }
    },
    watch: {
        height( newVal, oldVal ) {
            if (newVal!== oldVal) {
                this.bindView( newVal );
            }
        }
    },
    created(){
        this.$nextTick(() => {
            if ( this.height ) {
                this.bindView(this.height);
            }
        })
    },
    methods: {
        bindView( h ) {
            this.bindHeight(h);
            this.bindCss(h);
        },
        bindHeight(h) {
            if (typeof h === 'number') {
                this.currentH = h;
            }
        },
        bindCss(h) {
            if (typeof h === 'number') {
                let divs = document.querySelectorAll('.vue-roll-loop-item');
                let len = divs.length;
                // const first = divs[0].cloneNode(true);
                // // console.log(first);
                // document.getElementById("list").appendChild(first);
                setTimeout(() => {
                    this.anmite( 0 ,len);
                }, 3000)
                
            }
        },
        anmite( current, count ) {
            this.translateY = - this.currentH * current;
            setTimeout(()=>{
                let next = current + 1;
                    if ( next >= count ) {
                        next = 0;
                }
                this.anmite( next , count );
            },3000);
        }
    }
}


</script>