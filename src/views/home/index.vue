<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 250px"></el-card>
      <el-card shadow="hover" style="height: 522px; margin-top: 55px"></el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          <i class="icon"></i>
          <div class="detail">
            <p class="num">￥ 1234</p>
            <p class="txt">今日支付订单</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <div style="height: 260px"></div>
        </el-card>
        <el-card shadow="hover">
          <div style="height: 260px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.$http.get('/home/getData').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/home.scss';
</style>
