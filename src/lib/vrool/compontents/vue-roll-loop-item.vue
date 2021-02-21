<template>
    <div :class="['vue-roll-loop-item']" :style = "'height:'+height +'px'" >
        <slot></slot>
    </div>
</template>
<style scoped>
@import '../css/index.css';
</style>
<script>
import { height } from "../lib/config.js";
export default {
    name: 'vueRollLoopItem',
    data() {
        return {
            height: height,
        }
    },
    created() {
        this.$nextTick(() => {
            if (this.$parent.height ) {
                this.getHeight(this.$parent.height);
            }
        });
    },
    methods:{
        getHeight(_height) {
            this.height = _height;
        }
    }
}
</script>