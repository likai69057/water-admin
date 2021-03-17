<template>
  <el-container style="height: 100%;">
    <el-aside width="200px">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <component-tab></component-tab>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import componentTab from '@/components/componentTab'
export default {
  name: 'Main',
  components: {
    CommonHeader,
    CommonAside,
    componentTab
  }
}
</script>

<style scoped lang="scss">
.el-header {
  background-color: #333;
}
</style>
