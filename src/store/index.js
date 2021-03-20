import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制是否折叠菜单栏
    isCollapse: false,
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
    // 点击删除标签按钮
    closeTab(state, value) {
      let result = state.tabList.findIndex(item => item.name === value.name)
      state.tabList.splice(result, 1)
    },
    // 折叠菜单
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {},
  modules: {}
})
