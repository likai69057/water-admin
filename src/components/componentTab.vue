<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tabs"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="clickTag(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'componentTab',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tabs: state => state.tabList
    })
  },
  methods: {
    ...mapMutations({
      // 相当于this.store.commit('closeTab', value)
      close: 'closeTab'
    }),
    // 删除当前标签
    handleClose(tag) {
      this.close(tag)
    },
    // 跳转标签
    clickTag(tag) {
      this.$router.push({ name: tag.name })
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
