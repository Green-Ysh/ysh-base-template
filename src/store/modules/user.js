import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: null,
  }),
  
  getters: {
    getToken() {
      return this.token
    },
    getUserInfo() {
      return this.userInfo
    },
  },
  
  actions: {
    setToken(token) {
      this.token = token
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    logout() {
      this.token = ''
      this.userInfo = null
    },
  },
})
