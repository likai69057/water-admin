import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全部菜单
    menu: [],
    // 点击菜单
    currentMenu: null,
    // tab标签数组 默认是首页
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home'
      }
    ]
  },
  mutations: {
    selectMenu(state, value) {
      if (value.name !== 'home') {
        state.currentMenu = value
        // 如果点击的不是首页 将点击的value添加到tabList 添加之前先去重
        let result = state.tabList.findIndex(item => item.name === value.name)
        result === -1 ? state.tabList.push(value) : ''
      } else {
        state.currentMenu = null
      }
    },
    closeTab(state, value) {
      let result = state.tabList.findIndex(item => item.name === value.name)
      state.tabList.splice(result, 1)
    }
  },
  actions: {},
  modules: {}
})
