import vueRollLoop from '../compontents/vue-roll-loop.vue' // 导入组件
import vueRollLoopItem from '../compontents/vue-roll-loop-item.vue' // 导入组件

const rollloop = {
    install (Vue) {
        Vue.component( vueRollLoop.name, vueRollLoop );
        Vue.component( vueRollLoopItem.name, vueRollLoopItem );
    }
}
export default rollloop // 导出..