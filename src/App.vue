<template>
  <div id="app">
    <fjj-button @click="visible = true">default</fjj-button>
    <fjj-dialog :visible.sync="visible" title="我是头部">
      我是内容
      <template #footer>
        <fjj-button @click="visible = false">取消</fjj-button>
        <fjj-button @click="visible = false" type="primary">确定</fjj-button>
      </template>
    </fjj-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
</style>
