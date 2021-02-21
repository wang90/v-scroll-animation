# Vue 滚动插件

### 使用

#### 1 下载
````` 
npm install v-roll-loop
`````
#### 2 引用
`````
import vueRollLoop from './lib/index.js';
Vue.use(vueRollLoop)
`````
#### 3 使用

`````
<vue-roll-loop :height='80'>
    <vue-roll-loop-item>
        vue1
    </vue-roll-loop-item>
    <vue-roll-loop-item>
        vue2
    </vue-roll-loop-item>
    <vue-roll-loop-item>
        vue3
    </vue-roll-loop-item>
    <vue-roll-loop-item>
        vue4
    </vue-roll-loop-item>
    <vue-roll-loop-item>
        vue5
    </vue-roll-loop-item>
</vue-roll-loop>
`````
### 参数
``````
height : number 高度 default 30
``````