import Mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'springBoot',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '小程序',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'ES6',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Java',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'JavaScript',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ]
      }
    }
  }
}
