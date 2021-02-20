<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list: [],
    }
  },
  created(){
    setTimeout(() => {
        this.list = [1,12,3,]
    },1000)
    
    console.log(1)
  }
}
</script>

<style>
</style>
