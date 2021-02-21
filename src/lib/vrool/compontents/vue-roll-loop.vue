<template>
    <div :class="['vue-roll-box','vue-roll-loop']" 
        :style = "'height:' + currentH + 'px;'" >
        <div :class="['vue-roll-loop',show]" 
            :style="'transform: translateY('+ translateY +'px)'" id="list">
           <slot ref="slot"></slot>
        </div>
        <div :class="['vue-first-compontent',show]" id="first"></div>
    </div>

</template>
<style scoped>
@import '../css/index.css';
</style>
<script>
import { height , speed } from "../lib/config.js";

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
            classname: '',
            translateY: 0,
            show: 'hide',
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
        bindHeight( h ) {
            if ( typeof h === 'number' ) {
                this.currentH = h;
            }
        },
        bindCss( h ) {
            if ( typeof h === 'number' ) {
                let divs = document.querySelectorAll('.vue-roll-loop-item');
                let len = divs.length;
                const first = divs[0].cloneNode(true);
                document.getElementById("first").innerHTML = first.innerHTML;
                setTimeout(() => {
                    this.anmite( 0 ,len );
                }, speed );
                
            }
        },
        anmite( current, count ) {
            this.translateY = - this.currentH * current;
            setTimeout(() => {
                let next = current + 1;
                if ( next >= count ) {
                    next = 0;
                    this.show = 'show';
                    setTimeout(()=> {
                        this.show = 'leave';
                        setTimeout(()=> {
                            this.show = 'hide';
                        }, speed);
                    }, speed);
                }
                this.anmite( next , count );
            }, speed );
        }
    }
}


</script>