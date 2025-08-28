import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { LoginInfo } from '@/api/model/model'


export const useLoginStore = defineStore('loginInfo', () => {

  //1.定义Store（登录信息存储）
  const loginInfo =ref<LoginInfo>({
    username: ''
  })

  //2.存储登录信息
  const saveLoginInfo = (emp:LoginInfo) =>{
    loginInfo.value = emp

  }

  //3.获取登录信息

  const getloginInfo =()=>{
    return loginInfo.value
  }

  //4.删除登录信息
  const removeLoginInfo = () => {
    loginInfo.value =  {
      username:''
    }
  }

  return { loginInfo ,saveLoginInfo, getloginInfo, removeLoginInfo }
})
