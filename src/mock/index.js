import Mock from 'mockjs'
import homeApi from './home'

// 设置200-2000ms的延时请求数据
Mock.setup({
  timeout: '200-2000'
})

// 首页相关
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)
