<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><img class="userImg" :src="userImage"/></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  data() {
    return {
      userImage: require('@/assets/images/user.jpg')
    }
  },
  computed: {
    ...mapState({
      current: state => state.currentMenu
    })
  }
}
</script>

<style scoped lang="scss">
header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 020px;
  }
}
.r-content {
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
}
</style>

<style lang="scss">
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: white;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: white;
}
</style>
