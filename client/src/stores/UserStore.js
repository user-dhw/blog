import { defineStore } from "pinia";
export const useUserStore = defineStore('admin', {
  state: () => {
    return {
      id: 0,
      account: "",
      token: "",
    }
  },
  actions: {

  },
  getters: {

  }
})