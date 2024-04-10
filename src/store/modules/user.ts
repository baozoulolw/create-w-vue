import {defineStore} from "pinia";
import store from "../index.ts";
import _ from 'lodash'

export const useUserStore = defineStore('user',{
  state:() => ({
    
  }),
  getters:{
    
  },
  actions:{
    
  }
})

export function getUserStore() {
  return useUserStore(store)
}
