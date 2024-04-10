<template>
  <div class="w-full h-full">
    <router-view class="w-full h-full"></router-view>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
const data = reactive({})
onMounted(() => {
})
</script>
<style scoped lang='scss'>
</style>
