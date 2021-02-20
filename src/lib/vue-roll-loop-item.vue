<template>
    <div :class="['vue-roll-loop-item']" :style = "'height:'+height +'px'" >
        <slot></slot>
    </div>
</template>
<style scoped>
.vue-roll-loop-item {
    background:#ccc;
}
</style>
<script>
import { height } from "./config.js";
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