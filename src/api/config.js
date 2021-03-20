import axios from 'axios'

// 1.创建axios实例
const service = axios.create({
  // 请求超时时间最大值为3s
  timeout: 3000
})

// 2.添加请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  }
)

// 3.添加响应拦截器
service.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  error => {
    console.log(error)
  }
)

export default service
