<template>
    <div :class="['vue-roll-box','vue-roll-loop']" :style = "'height:' + currentH + 'px;'" >
        <div :class="['vue-roll-loop']">
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
        animation: scroll 3s infinite linear;
        -moz-animation: scroll 3s infinite linear;	
        -webkit-animation: scroll 3s infinite linear;	
        -o-animation: scroll 3s infinit;
        animation-delay: 2s;
        -webkit-animation-delay:2s; 
    }
    /*
    @keyframes scroll {
    0% {
        transform: translateY( 0 );
    }
    3% {
        transform: translateY( -44px );
    }
    50% {
        transform: translateY( -44px );
    }
    53%{
        transform: translateY( -88px );
    }
    100% {
        transform: translateY( -88px );
    }
} */
</style>
<script>
import { height } from "./config.js";
// const classname = `animation: scroll 3s infinite linear; animation-delay: 2s;`

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
            "currentH": height,
            "classname": '',
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
                let style = document.createElement('style');
                style.setAttribute('type', 'text/css');
                document.head.appendChild(style);
                let sheet = style.sheet;
                let divs = document.querySelectorAll('.vue-roll-loop-item');
                let len = divs.length;
                console.log(len)
                // const index = 1;
                sheet.insertRule(
                    `@keyframes scroll{
  			            from {
			                transform: rotate(300deg);
  			            }
 			            to {
 			                //注意：动态的计算需要先计算再赋值，不然浏览器会直接当字符串来解析
                            transform: rotate(400deg);
                         }
			        }`,0
                );
                // console.log(classname)
                // this.classname = classname;
            }
        }
        
    }
}

</script>