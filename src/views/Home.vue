<template>
  <div>
    <!-- view层 -->
    {{text}}
    <br/>
    <input  v-model='text' /> <!-- v-model 实现了 view=>model 视图影响数据  -->
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    // Model层
    return {
      text:'vue no!'
    }
  },
  mounted(){
    /**
     * Vue内置实现的ViewModel层
     * =>监听数据的改变
     */
    setTimeout(()=>{
      this.text='vue yes!'
    },2000)
    // 两秒之后数据改变 vue 会监听到,从而重新渲染视图  (数据改变视图)
  }

}
</script>
<style lang="" scoped>
</style>
